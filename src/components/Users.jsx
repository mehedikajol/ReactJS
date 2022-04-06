import { useUsersData } from "../hooks/useUsersData";

export default function Users() {
  const { data } = useUsersData();
  console.log(data?.data);
  return (
    <div className="container">
      <div className="row">
        {data?.data.map((user) => {
          return (
            <div className="col-lg-4 col-sm-6 mb-4" key={user.id}>
              <h2>{user.name}</h2>
              <h2>{user.username}</h2>
              <h3>{user.email}</h3>
              <h3>{user.phone}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
