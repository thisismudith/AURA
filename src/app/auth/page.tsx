"use client";

import React, { useState } from "react";
import { CommonButton } from "@/compenents/common_button";
import { login, register } from "@/database/users";
import { CommonTextField } from "@/compenents/common_textfield";
import { isValidEmail, isValidPassword} from "@/utils/regex";
import { useResponsive } from "../../utils/responsive_helper";
import { CommonText } from "../../styles/commont_text";

export default function Auth(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        type: "",
      });
    
      const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({
          ...prev,
          [field]: value,
        }));
      };
    
      const handleSubmit = (is_logging_in: boolean = true) => {
        // User Login 
        if (is_logging_in){
            if (formData.email === "" || formData.password === "") {
                alert("Please fill in all fields");
                return;
            }
            if (!isValidEmail(formData.email)) alert("Please enter a valid email address");
            else if (!isValidPassword(formData.password)) alert("Please enter a valid password");
            else{
                login(formData.email, formData.password).then((res) => {
                    if (res) {
                        alert("Login successful");
                    } else {
                        alert("Login failed");
                    }
                }
                ).catch((err) => {
                    if (err.code == 409){
                        alert("A user with this email already exists. Login instead.");
                        return;
                    }
                    if (err.code == 401){
                        alert("Invalid credentials");
                        return;
                    }
                });
            }
        }

        // User signup
        else{

        }
      };    

      const { w, h, t } = useResponsive();

        const styles: { [key: string]: React.CSSProperties } = {
            container: {
              width: "100%",
              height: "100vh",
              padding: "40px",
              backgroundColor: "var(--dark-500)",
              border: "1px solid red",
            },
            card: {
              margin: "auto",
              width: `${w(440)}px`,
              height: `${h(480)}px`,
              backgroundColor: "var(--white-500)",
              borderRadius: "20px",
              boxShadow: "0px 54.999996185302734px 109.99999237060547px rgba(0, 0, 0, 0.4), 0px 54.999996185302734px 109.99999237060547px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
            },
            title: { 
              ...CommonText.header4Bold,
              color: "var(--dark-500)",
              marginBottom: "8px",
            },
            subtitle: {
              ...CommonText.body2Regular,
              color: "var(--gray-500)",
              marginBottom: "24px",
            },
            inputGroup: {
              marginBottom: "16px",
            },
            buttonGroup: {
              marginTop: "8px",
            },
            footer: {
              marginTop: "24px",
              textAlign: "center",
            },
            footerText: {
                ...CommonText.body2Regular,
              color: "#555555",
            },
            footerLink: {
              color: "#007bff",
              textDecoration: "none",
              fontWeight: 500,
            },
        };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Login with Email</h2>
                <p style={styles.subtitle}>Please enter your credentials to continue.</p>

                <div style={styles.inputGroup}>
                    <CommonTextField placeholder="Email" type="email" value={formData.email} onChange={(val) => handleChange("email", val)} />
                </div>
                <div style={styles.inputGroup}>
                    <CommonTextField placeholder="Password" type="password" value={formData.password} onChange={(val) => handleChange("password", val)} />
                </div>

                <div style={styles.buttonGroup}>
                    <CommonButton text="Login" onClick={() => handleSubmit(true)} />
                </div>

                <div style={styles.footer}>
                <p style={styles.footerText}>
                    Don't have an account?{" "}
                    <a href="#" style={styles.footerLink}>
                    Sign up
                    </a>
                </p>
                </div>
            </div>
        </div>
    )
}
