interface AdminCardProps {
  children: React.ReactNode;
  title: string;
}

const AdminCard: React.FC<AdminCardProps> = ({ children, title }) => {
  return (
    <div className="p-2 mt-4">
      <h1 className="text-4xl font-semibold tracking-wider mb-4 lg:mb-2">
        {title}
      </h1>
      <div className="lg:p-2">{children}</div>
    </div>
  );
};

export default AdminCard;
