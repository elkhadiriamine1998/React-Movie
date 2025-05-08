import "../css/Signin.css"


function Signin() {

    return <form>

    <div className="sign-in">
    <h2>Login</h2>
    <input
               type="text"
               placeholder="mail"
               className="search-input"
    />

    <input
               type="text"
               placeholder="Password"
               className="search-input"
    />


    <button type="submit" className="signin-button">
            LOGIN
    </button>

      
    </div>

    </form>
    
    

};

export default Signin