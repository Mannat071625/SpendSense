import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/Auth/AuthLayout";
import InputField from "../../components/Auth/InputField";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!form.name.trim())
      newErrors.name = "Full name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email.";
    }

    if (!form.password)
      newErrors.password = "Password is required.";

    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";

    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match.";
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

    // Replace with backend API later
    setTimeout(() => {
      console.log(form);
      setLoading(false);
    }, 1500);
  }

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start tracking your expenses today."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-1"
      >
        <InputField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          error={errors.name}
        />

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
          placeholder="Minimum 6 characters"
          required
          error={errors.password}
        />

        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter password"
          required
          error={errors.confirmPassword}
        />

        <button
          type="submit"
          disabled={loading}
          className="
            mt-4
            w-full
            rounded-xl
            bg-[#0F5C46]
            py-3.5
            text-base
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-[#0C4A39]
            hover:shadow-lg
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-[#5B6F63]">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#0F5C46] hover:underline"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Register;