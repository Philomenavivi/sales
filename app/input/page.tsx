"use client";

type InputProps = {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
};

export default function Input({
    label,
    type = "text",
    placeholder,
    value,
}: InputProps) {
    return (
        <div
            style={{
                display: "grid",
                flexDirection: "column",
                gap: "38px",
                width: "100%",
                marginBottom: "20px",
                fontSize: "15px",
                borderRadius: "10px",
                border: "4px solid gray",
                outline: "none",
                backgroundColor: "gray",
                color: "#111827",
                transition: "0.2s ease",
            
      }}
    >
    { label && (
        <label
            style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#374151",
            }}
        >
            {label}
        </label>
    )}

<input
    type={type}
    placeholder={placeholder}
    defaultValue={value}
    style={{
        width: "100%",
        padding: "14px 18px",
        fontSize: "16px",
        borderRadius: "12px",
        border: "4px solid black",
        outline: "4px",
        backgroundColor: "gray",
        color: "#111827",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        boxSizing: "border-box",
        gap: "20px",
        margin: "20px",
    }}
/>
    </div >
  );
}