export interface PageProps {
  params: {
    id: string;
  };
  searchParams?: Record<string, string>;
}