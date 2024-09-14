import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col gap-1 font-extrabold text-4xl w-1/2 group *:duration-300"
    >
      <span className="bg-clip-text group-hover:text-transparent bg-gradient-to-r from-blue-600 to-red-600">
        Next
      </span>
      <span className="self-end bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600 group-hover:text-primary-foreground">
        Task
      </span>
    </Link>
  );
}
