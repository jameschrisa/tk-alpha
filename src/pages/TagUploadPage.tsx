import { useState, useEffect } from "react";
import { Page } from "../components/Page";
import { PageProps } from "../types/page";
import { Button } from "@nextui-org/react";

interface Tag {
  id: string;
  label: string;
}

interface UploadedImage {
  id: string;
  file: File;
  tags: string[];
  notes: string;
  platform: string;
}

const AVAILABLE_TAGS: Tag[] = [
  { id: "risk-enhancers", label: "Risk Enhancers Identified" },
  { id: "protector-factors", label: "Protector Factors Identified" },
  { id: "baseline-shift", label: "Baseline Shift Identified" },
  { id: "access-means", label: "Access to Means Identified" },
  { id: "rehearsal-means", label: "Rehearsal Means Identified" },
];

interface TagUploadPageProps {
  onNavigate: (targetPage: string, platform?: string) => void;
  platform: string;
}

export const TagUploadPage = ({ onNavigate, platform }: TagUploadPageProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [usernames, setUsernames] = useState("");
  const [savedUsernames, setSavedUsernames] = useState<string[]>([]);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});

  // Cleanup image URLs when component unmounts
  useEffect(() => {
    return () => {
      Object.values(imageUrls).forEach(url => {
        URL.revokeObjectURL(url);
      });
    };
  }, [imageUrls]);

  // Create and store image URL
  const createImageUrl = (file: File, id: string) => {
    const url = URL.createObjectURL(file);
    setImageUrls(prev => ({ ...prev, [id]: url }));
    return url;
  };

  // Cleanup image URL
  const removeImageUrl = (id: string) => {
    const url = imageUrls[id];
    if (url) {
      URL.revokeObjectURL(url);
      setImageUrls(prev => {
        const newUrls = { ...prev };
        delete newUrls[id];
        return newUrls;
      });
    }
  };

  // Helper function to create a File object from a blob
  const createFileFromBlob = async (blob: Blob, fileName: string): Promise<File> => {
    return new File([blob], fileName, { type: blob.type });
  };

  // Load saved data from local storage
  useEffect(() => {
    // Load usernames, notes, and tags
    const savedData = localStorage.getItem(`${platform}-data`);
    if (savedData) {
      const data = JSON.parse(savedData);
      setSavedUsernames(data.usernames || []);
      setNotes(data.notes || "");
      setSelectedTags(data.tags || []);
    }

    // Load saved images
    const savedImages = localStorage.getItem(`${platform}-images`);
    if (savedImages) {
      const imageData = JSON.parse(savedImages);
      // Convert saved image data back to File objects
      Promise.all(
        imageData.map(async (img: any) => {
          try {
            const response = await fetch(img.dataUrl);
            const blob = await response.blob();
            const file = await createFileFromBlob(blob, img.fileName);
            return {
              id: img.id,
              file,
              tags: img.tags,
              notes: img.notes,
              platform: img.platform,
            };
          } catch (error) {
            console.error('Error loading image:', error);
            return null;
          }
        })
      ).then((loadedImages) => {
        const validImages = loadedImages.filter((img): img is UploadedImage => img !== null);
        setImages(validImages);
      });
    }
  }, [platform]);

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(`${platform}-data`, JSON.stringify({
      usernames: savedUsernames,
      notes,
      tags: selectedTags,
    }));
  }, [savedUsernames, notes, selectedTags, platform]);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages: UploadedImage[] = Array.from(files).map(file => ({
      id: Math.random().toString(36).substring(7),
      file,
      tags: selectedTags,
      notes,
      platform
    }));

    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);

    // Save images to local storage with data URLs
    const imageData = await Promise.all(
      updatedImages.map(async (img) => {
        const dataUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(img.file);
        });

        return {
          id: img.id,
          fileName: img.file.name,
          dataUrl,
          tags: img.tags,
          notes: img.notes,
          platform: img.platform,
        };
      })
    );
    localStorage.setItem(`${platform}-images`, JSON.stringify(imageData));
  };

  const handleAddUsername = () => {
    if (!usernames.trim()) return;
    const newUsernames = [...savedUsernames, usernames.trim()];
    setSavedUsernames(newUsernames);
    setUsernames("");
  };

  const handleSave = () => {
    // Here you would typically save all the data
    console.log('Saving data:', {
      images,
      usernames,
      platform
    });
    onNavigate("social-media", platform);
  };

  const pageProps: PageProps = {
    metadata: {
      pageId: "tag-upload",
      controlIds: ["return", "save"],
    },
    content: {
      breadcrumbs: [
        { label: "Start", onClick: () => onNavigate("terms") },
        { label: "Begin Data Collection", onClick: () => onNavigate("data-collection") },
        { label: "Threat Maker", onClick: () => onNavigate("threat-maker") },
        { label: "Safety Considerations", onClick: () => onNavigate("safety-considerations") },
        { label: "KTM", onClick: () => onNavigate("known-threat-maker") },
        { label: "Social Media", onClick: () => onNavigate("social-media") },
        { label: "Data Collection Workspace" }
      ],
      title: "Data Collection Workspace",
      legalText: (
        <div className="grid grid-cols-2 gap-8">
          {/* Left Card - Upload Images */}
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Upload Images</h2>
            <p className="text-gray-600 mb-4">Upload and tag your screenshot to document evidence.</p>
            <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-1">
              <li>Add multiple screenshots at once</li>
              <li>Tag screenshots with relevant categories</li>
              <li>Add detailed notes for each screenshot</li>
              <li>Save screenshots for later analysis</li>
            </ul>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Selected Platform: <span className="font-medium capitalize">{platform}</span></p>
                <Button
                  className="bg-[#0047CC] hover:bg-[#0037A1] text-white w-full"
                  startContent={<span className="text-2xl">+</span>}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  Add Images
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>

              {images.length > 0 && (
                <div className="border rounded-lg p-4 space-y-4">
                  <h3 className="font-medium">Uploaded Images:</h3>
                  <div className="space-y-4">
                    {images.map((image) => (
                      <div key={image.id} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={imageUrls[image.id] || createImageUrl(image.file, image.id)}
                            alt="Preview"
                            className="w-full h-full object-cover rounded"
                            onError={() => {
                              console.error('Error loading image preview');
                              removeImageUrl(image.id);
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{image.file.name}</p>
                          {image.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {image.tags.map((tagId) => {
                                const tag = AVAILABLE_TAGS.find(t => t.id === tagId);
                                return tag ? (
                                  <span
                                    key={tagId}
                                    className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full"
                                  >
                                    {tag.label}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          )}
                          {image.notes && (
                            <p className="mt-1 text-sm text-gray-600 truncate">
                              {image.notes}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => {
                            removeImageUrl(image.id);
                            const newImages = images.filter(img => img.id !== image.id);
                            setImages(newImages);
                            // Update local storage
                            Promise.all(
                              newImages.map(async (img) => {
                                const dataUrl = await new Promise<string>((resolve) => {
                                  const reader = new FileReader();
                                  reader.onloadend = () => resolve(reader.result as string);
                                  reader.readAsDataURL(img.file);
                                });
                                return {
                                  id: img.id,
                                  fileName: img.file.name,
                                  dataUrl,
                                  tags: img.tags,
                                  notes: img.notes,
                                  platform: img.platform,
                                };
                              })
                            ).then((imageData) => {
                              localStorage.setItem(`${platform}-images`, JSON.stringify(imageData));
                            });
                          }}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2">Notes</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full h-32 p-3 border rounded-lg focus:ring-2 focus:ring-[#0047CC] focus:border-transparent"
                  placeholder="Enter notes about the screenshots..."
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Select one or more tags.</label>
                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_TAGS.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => {
                        setSelectedTags(prev => 
                          prev.includes(tag.id)
                            ? prev.filter(id => id !== tag.id)
                            : [...prev, tag.id]
                        );
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${selectedTags.includes(tag.id)
                          ? "bg-gray-700 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Usernames */}
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Usernames Identified?</h2>
            <p className="text-gray-600 mb-6">
              Use this space to enter any username(s) you already have documented, or any notes about the case you want to reference through your search:
            </p>
            <p className="text-gray-500 mb-4">Press enter to add content</p>

            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={usernames}
                  onChange={(e) => setUsernames(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddUsername()}
                  className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-transparent"
                  placeholder="Enter username"
                />
                <Button
                  className="bg-[#10B981] hover:bg-[#059669] text-white px-6"
                  onClick={handleAddUsername}
                >
                  Add
                </Button>
              </div>
              
              {savedUsernames.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Saved Usernames:</h3>
                  <div className="space-y-2">
                    {savedUsernames.map((username, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded"
                      >
                        <span>{username}</span>
                        <button
                          onClick={() => {
                            const newUsernames = savedUsernames.filter((_, i) => i !== index);
                            setSavedUsernames(newUsernames);
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ),
    },
    controls: {
      alternativePages: [
        {
          controlId: "return",
          label: "Return to Social Media Platforms",
          targetPage: "social-media",
          onClick: () => onNavigate("social-media", platform),
          className: "bg-[#0047CC] hover:bg-[#0037A1]"
        },
        {
          controlId: "save",
          label: "Save and Continue",
          targetPage: "social-media",
          className: "bg-[#10B981] hover:bg-[#059669]",
          onClick: handleSave
        }
      ]
    },
  };

  return <Page {...pageProps} onNavigate={onNavigate} />;
};
