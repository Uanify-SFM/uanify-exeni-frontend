type CategoryPageProps = {
  type: string;
};

function CategoryPage({ type }: CategoryPageProps) {
  return <div>{type}</div>;
}

export default CategoryPage;
