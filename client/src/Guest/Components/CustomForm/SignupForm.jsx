import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../../App'

export default function SignupForm() {

  const [show, setShow] = useState(false)


  const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = { email, password, username }

      axios.post('/api/signup', payload)
          .then((json) => {console.log(json.data)
          navigate('/Login')
          })
          .catch(err => console.log(err))

  }

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
          <div className="p-5 bg-dark rounded text-white">
            <form className='signup-form' onSubmit={handleSubmit}>
              <div className="md-3">
                <label htmlFor="User" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  placeholder='Enter Username'
                  required=""
                  value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="md-3">
                <label htmlFor="inputPassword5" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder='Enter Password'
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div id="passwordHelpBlock" className="form-text text-white">
                  Your password must be 8-20 characters long, contain letters and numbers, and
                  must not contain spaces, special characters, or emoji.
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                SignUp
              </button>



            </form>
          </div>
        </div>
      </div>
    </>

  )
}
