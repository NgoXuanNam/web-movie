import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();
  const submit = useRef();
  useEffect(() => {
    function showError(input, message) {
      const parent = input.parentElement;
      const small = parent.querySelector("small");
      parent.classList.add("error");
      small.innerText = message;
    }
    function showSuccess(input, message) {
      const parent = input.parentElement;
      const small = parent.querySelector("small");
      parent.classList.remove("error");
      small.innerText = "";
    }

    function checkEmptyError(listInput) {
      let isEmptyError = false;
      listInput.forEach((input, index) => {
        input.value = input.value.trim();
        if (!input.value) {
          isEmptyError = true;
          showError(input, "Vui lòng nhập trường này");
        } else {
          showSuccess(input);
        }
      });
      return isEmptyError;
    }

    function checkEmailError(input) {
      const regexEmail =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      input.value = input.value.trim();
      if (regexEmail.test(input.value)) {
        showSuccess(input);
      } else {
        showError(input, "Email không hợp lệ");
      }
    }

    function checkPasswordLength(input, min, max) {
      input.value = input.value.trim();
      if (input.value.length < min) {
        showError(input, `Bạn phải nhập ít nhất ${min} kí tự `);
      } else if (input.value.length > max) {
        showError(input, `Bạn chỉ nhập được tối đa ${max} kí tự `);
      } else {
        showSuccess(input);
      }
    }

    function checkPasswordComfirm(passwordInput, rePasswordInput) {
      passwordInput.value = passwordInput.value.trim();
      rePasswordInput.value = rePasswordInput.value.trim();

      if (passwordInput.value === rePasswordInput.value) {
        showSuccess(rePasswordInput);
      } else {
        showError(rePasswordInput, "Mật khẩu không khớp");
      }
    }

    function checkReInput(listInput) {
      listInput.forEach((input) => {
        input.addEventListener("input", function () {
          showSuccess(input);
        });
      });
    }

    submit.current.addEventListener("click", function (e) {
      e.preventDefault();
      let isEmptyError = checkEmptyError([
        username.current,
        email.current,
        password.current,
        rePassword.current,
      ]);
      checkPasswordLength(password.current, 8, 10);
      checkEmailError(email.current);
      checkPasswordComfirm(password.current, rePassword.current);
      checkReInput([
        username.current,
        email.current,
        password.current,
        rePassword.current,
      ]);
    });
  }, []);

  return (
    <SignUpStyle>
      <form className="signup_form">
        <h1>Đăng ký</h1>
        <div className="signup_form-control">
          <input type="text" placeholder="Username" ref={username} />
          <small></small>
          <span></span>
        </div>
        <div className="signup_form-control ">
          <input type="email" placeholder="Email" ref={email} />
          <small></small>
          <span></span>
        </div>
        <div className="signup_form-control">
          <input type="password" placeholder="Password" ref={password} />
          <small></small>
          <span></span>
        </div>
        <div className="signup_form-control">
          <input
            type="password"
            placeholder="Confirm Password"
            ref={rePassword}
          />
          <small></small>
          <span></span>
        </div>
        <button className="signup_form-submit" ref={submit}>
          Đăng ký
        </button>
        <div className="signup_form-label">
          Bạn đã có tài khoản?{" "}
          <Link to="/dang-nhap" className="signup_form-link">
            Đăng nhập
          </Link>
        </div>
      </form>
    </SignUpStyle>
  );
}

const SignUpStyle = styled.div`
  padding-top: calc(var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-primary);
  height: calc(100vh - (var(--header-height) + var(--footer-height)));

  .signup_form {
    background-color: var(--color-white);
    width: 40rem;
    height: 90%;
    box-sizing: border-box;
    padding: 2rem 2.5rem;
    border-radius: 2rem;
    @media screen and (max-width: 739px) {
      width: 30rem;
      height: 90%;
      box-sizing: border-box;
    }
    h1 {
      text-align: center;
      font-size: 3rem;
    }
    .signup_form-control {
      position: relative;
      width: 100%;
      margin-top: 2.5rem;
      @media screen and (max-width: 739px) {
        margin-top: 1.5rem;
      }

      input {
        width: 100%;
        height: 4rem;
        border: none;
        font-size: 1.4rem;
        border-bottom: 0.2rem solid #aaa;
        outline: none;
        &:focus ~ span {
          width: 100%;
        }
      }
      small {
        font-size: 1.3rem;
      }
      &.error small {
        color: var(--color-red);
      }
      &.error input {
        border-bottom: 0.2rem solid var(--color-red);
      }
      span {
        position: absolute;
        top: 4rem;
        left: 0;
        width: 0%;
        border-bottom: 0.3rem solid var(--color-blue);
        transition: 0.25s linear;
      }
    }
    .signup_form-submit {
      margin-top: 5rem;
      padding: 1rem 2rem;
      width: 100%;
      background-color: var(--color-blue);
      color: var(--color-white);
      font-size: 2rem;
      font-weight: 500;
      border-radius: 2rem;
      border: none;
    }
    .signup_form-label {
      margin-top: 1rem;
      text-align: center;
      font-size: 1.2rem;
      .signup_form-link {
        color: var(--color-blue);
      }
    }
  }
`;
