interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
}

const HeaderMenuItem = ({ children, onClick }: Props) => {
  return (
    <span
      className="header-label uppercase text-sm font-medium mx-2 text-gray-600 tracking-wider cursor-pointer hover:text-gray-400"
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default HeaderMenuItem;
