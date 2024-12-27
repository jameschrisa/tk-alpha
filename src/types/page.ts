export interface PageMetadata {
  pageId: string;
  controlIds: string[];
}

export interface PageContent {
  title: string | React.ReactNode;
  description?: string;
  helpText?: string;
  legalText?: React.ReactNode;
  breadcrumbs?: string[];
}

export interface AlternativePage {
  controlId: string;
  targetPage: string;
  label?: string;
  className?: string;
}


export interface PageControls {
  previousPage?: string;
  nextPage?: string;
  alternativePages?: AlternativePage[];
  onSubmit?: () => void;
}

export interface PageProps {
  metadata: PageMetadata;
  content: PageContent;
  controls: PageControls;
}
