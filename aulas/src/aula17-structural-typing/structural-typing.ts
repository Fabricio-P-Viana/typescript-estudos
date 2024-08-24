
type VerifyUserFn = (user: User, sentValue: User) => boolean;

type User = { username: string; password: string }; // restrição de tipos não pelo nome do tipo mas pela estrutura

const VerifyUser: VerifyUserFn = (user, sentValue) =>{
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joão', password: '123456' }; // tipo inferido, não é necessário
const sentUser = { username: 'joão1', password:'123456' }; // seguindo a estrutura do tipo User sem ser o mesmo

const loggedin = VerifyUser(bdUser, sentUser);
console.log(loggedin);
