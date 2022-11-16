import { useCallback, useState } from "react";
import "./style.css"

 const Login: React.FC = () => {
  const [usernama, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback((event:any) => {
      event.preventDefault();
      console.log(usernama, password);
  },[usernama, password])

  return (
    <form  className="container" onSubmit={handleSubmit} >
        <div className="form-group">
            <label htmlFor="">Usuário</label>
            <input 
              type="text" 
              onChange={(event) => setUsername(event.target.value)} 
            />
        </div>

        <div className="form-group">
            <label htmlFor="">Senha</label>
            <input 
              type="password"
              onChange={(event) => setPassword(event.target.value)} 
              />
        </div>

        <div className="form-group">
            <button type="submit">Entrar</button>
        </div>
    </form>
  )
}

export default Login;
