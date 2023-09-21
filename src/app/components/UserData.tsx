export type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function UserData({ user, pagetype }: Props) {
  //console.log(user)

  const greeting = user?.name ? "שלום " + user.name : null;
  const pageTypeText = pagetype ? "מיקומך " + pagetype : null;
  const emailDisplay = user?.email ? (
    <div className="flex flex-col items-center p-6  rounded-lg font-bold text-5xl ">{user?.email}</div>
  ) : null;

  return (
    <div className={`flex flex-col w-full `}>
      <div className="flex gap-4">
        <h2 className="  gap-4">{greeting}</h2>
        <span>{pageTypeText}</span>
        <img width={20} src={user?.image ?? ""} alt="" />
      </div>
    </div>
  );
}
