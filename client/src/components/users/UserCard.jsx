import { Card } from "../ui";

export function UserCard({user}) {
    return (
        <Card>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{user.username}</h1>
            </header>
            <p className="text-slate-300"
               style={{fontSize: 'larger'}}>{user.email}</p>
        </Card>
    );
}
