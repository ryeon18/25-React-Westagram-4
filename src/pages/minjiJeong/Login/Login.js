import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import '../Login/Login.scss';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      phone: '010-9945-7580',
      name: 'minjiJeong',
    };
  }

  handleId = e => {
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePw = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  handleLogin = () => {
    this.props.history.push('/main-minji');

    // Backend 통신 시 사용
    // fetch('http://10.58.1.9:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.idValue,
    //     password: this.state.pwValue,
    //     phone: this.state.phone,
    //     name: this.state.name,
    //   })
    //     .then(response => response.json())
    //     .then(response => {
    //       if (response.token) {
    //         localStorage.setItem('token', response.token);
    //         this.props.history.push('/main-minji');
    //       } else {
    //         alert('Error');
    //       }
    //     }),
    // });
  };

  render() {
    // 로그인 유효성 검사
    const enableBtn =
      this.state.idValue.includes('@') && this.state.pwValue.length >= 5;

    return (
      <div className="container">
        <p id="logo">Westagram</p>
        <form className="login_form">
          <input
            className="login login_id"
            id="user_id"
            type="text"
            autoComplete="off"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={this.state.idValue}
            onChange={this.handleId}
          />
          <input
            className="login login_pw"
            id="user_pw"
            type="password"
            autoComplete="off"
            placeholder="비밀번호"
            value={this.state.pwValue}
            onChange={this.handlePw}
          />
          <button
            className={`loginBtn ${enableBtn ? 'activeBtn' : 'disableBtn'}`}
            type="button"
            disabled={!enableBtn}
            onClick={this.handleLogin}
          >
            로그인
          </button>
        </form>
        <Link className="find_pw" to="/find_account">
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    );
  }
}

export default withRouter(Login);
