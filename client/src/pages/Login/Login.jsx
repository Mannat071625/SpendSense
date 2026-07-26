import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/Auth/AuthLayout";
import InputField from "../../components/Auth/InputField";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validate() {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // Replace with API call later
    setTimeout(() => {
      console.log(form);
      setLoading(false);
    }, 1500);
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue managing your expenses."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-1"
      >
        <InputField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          error={errors.email}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
          error={errors.password}
        />

        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm text-[#0F5C46] hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="
            mt-5
            w-full
            rounded-xl
            bg-[#0F5C46]
            py-3.5
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#0C4A39]
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-[#5B6F63]">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-semibold text-[#0F5C46] hover:underline"
        >
          Register
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Login;