import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="mb-6">

      {/* Label */}

      <label
        htmlFor={name}
        className="mb-2 flex items-center gap-1 text-sm font-semibold text-[#17241C]"
      >
        {label}

        {required && (
          <span className="text-red-500">*</span>
        )}
      </label>

      {/* Input */}

      <div className="relative">

        <input
          id={name}
          name={name}
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            rounded-xl
            border
            bg-[#F7F8F3]
            px-4
            py-3.5
            pr-12
            text-base
            text-[#17241C]
            placeholder:text-[#9AA79F]
            outline-none
            transition-all
            duration-200

            ${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                : "border-[#D3E3D6] focus:border-[#0F5C46] focus:ring-[#0F5C46]/10"
            }

            focus:ring-4

            disabled:cursor-not-allowed
            disabled:opacity-60
          `}
        />

        {/* Password Toggle */}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7C73] transition hover:text-[#0F5C46]"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}

      </div>

      {/* Error */}

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}

export default InputField;