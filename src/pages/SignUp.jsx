import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})

	const { name, email, password } = formData

	const navigate = useNavigate()

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}

	return (
		<>
			<div className='pageContainer'>
				<header>
					<p className='pageHeader'>Sign Up</p>
				</header>

				<form>
					<input
						type='text'
						className='nameInput'
						placeholder='Name'
						id='name'
						value={email}
						onChange={onChange}
					/>

					<input
						type='email'
						className='emailInput'
						placeholder='Email'
						id='email'
						value={email}
						onChange={onChange}
					/>

					<div className='passwordInputDiv'>
						<input
							type={showPassword ? 'text' : 'password'}
							className='passwordInput'
							placeholder='Password'
							id='password'
							value={password}
							onChange={onChange}
						/>

						<img
							className='showPassword'
							src={visibilityIcon}
							alt='show password'
							onClick={(prevState) => !prevState}
						/>
					</div>

					<Link to='/forgot-password' className='forgotPasswordLink'>
						Forgot Password
					</Link>

					<div className='signUpBar'>
						<p className='signUpText'>Sign Up</p>
						<button className='signUpButton'>
							<ArrowRightIcon fill='#fff' width='34px' height='34px' />
						</button>
					</div>
				</form>

				{/* Google OAuth */}

				<Link to='/sign-in' className='registerLink'>
					Sign In Instead
				</Link>
			</div>
		</>
	)
}