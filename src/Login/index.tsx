import "./style.css"

export default function Login() {
  return (
    <form action="" className="container">
        <div className="form-group">
            <label htmlFor="">Usuário</label>
            <input type="text" />
        </div>

        <div className="form-group">
            <label htmlFor="">Senha</label>
            <input type="password" />
        </div>

        <div className="form-group">
            <button type="submit">Entrar</button>
        </div>
    </form>
  )
}
