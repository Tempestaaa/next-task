interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <div className="h-fit relative after:absolute after:h-1 after:w-[5%] after:bg-gradient-to-r after:from-violet-600 after:to-sky-600 after:-bottom-2 after:left-0 after:rounded-full">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
    </div>
  );
}
