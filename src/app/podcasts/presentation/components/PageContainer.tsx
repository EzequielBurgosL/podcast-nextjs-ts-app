import Link from "next/link";

export const PageContainer = ({ children }) => {
  return (
    <div className="page-container">
      <header className="page-header">
        <Link href={{ pathname: "/podcasts" }} as="/podcasts">
          <h1 className="page-title fs-l fw-bold">Podcaster</h1>
        </Link>
        isLoading...
      </header>
      {children}
    </div>
  );
};
