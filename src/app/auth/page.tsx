"use client";

import '@/styles/globals.css';
import React, { useState } from "react";
import { CommonButton } from "@/compenents/common_button";
import { login, register } from "@/database/users";
import { CommonTextField } from "@/compenents/common_textfield";
import { isValidEmail, isValidPassword} from "@/utils/regex";
import { useResponsive } from "../../utils/responsive_helper";
import { CommonText } from "../../styles/commont_text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, far } from '@fortawesome/free-regular-svg-icons';
import { Icon } from '@mui/material';
import { EmailOutlined, LockOutline, RemoveRedEyeOutlined } from '@mui/icons-material';

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

      const { w, h, t } = useResponsive(),
      styles: { [key: string]: React.CSSProperties } = {
        container: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        },
        card: {
          width: `${w(420)}px`,
          height: `fitContent`,
          // background: "linear-gradient(145deg, #141319, #18161e)",
          // boxShadow: "19px 19px 20px #0e0e12, -19px -19px 20px #1e1c26",
          background: "linear-gradient(145deg, #1d1920, #221e27)",
          boxShadow: "20px 20px 22px #100e12, -20px -20px 22px #100e12",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        title: { 
          ...CommonText.header4Bold,
          color: "var(--black-500)",
          height: "fitContent",
        },
        subtitle: {
          ...CommonText.body2Regular,
          color: "var(--gray-500)",
          marginBottom: "24px",
        },
        inputGroup: {
          width: "95%",
          marginBottom: "16px",
        },
        buttonGroup: {
          width: "95%",
          marginTop: "8px",
        },
        footer: {
          marginTop: "24px",
          textAlign: "center",
        },
        footerText: {
            ...CommonText.body2Regular,
          color: "var(--gray-500)",
        },
        forgotText: {
          ...CommonText.body2Regular,
          color: "var(--primary-500)",
          textAlign: "right",
        },
        footerLink: { 
          color: "var(--primary-500)",
          fontWeight: 500,
        },
      };


      return (
        <div style={styles.container} className="min-h-screen">
            <div style={styles.card}>
                <h2 style={styles.title}>Login with Email</h2>
                <p style={styles.subtitle}>Please enter your credentials to continue.</p>

                <div style={styles.inputGroup}>
                    <CommonTextField prefixIcon={<EmailOutlined fontSize='small' sx={{color: 'var(--white-500)'}}></EmailOutlined>} border="2px solid var(--primary-500)" placeholder="Email" type="email" value={formData.email} onChange={(val) => handleChange("email", val)} />
                </div>
                <div style={ {...styles.inputGroup, marginBottom: "4px"}}>
                    <CommonTextField prefixIcon={<LockOutline fontSize='small' sx={{color: 'var(--white-500)'}}></LockOutline>} suffixIcon={<RemoveRedEyeOutlined fontSize='small' sx={{color: 'var(--white-500)'}}></RemoveRedEyeOutlined>} border="2px solid var(--primary-500)" placeholder="Password" type="password" value={formData.password} onChange={(val) => handleChange("password", val)} />
                </div>
                
                <div style={{marginBottom: "16px", width: "95%"}}>
                  <p style={styles.forgotText}>
                      <span style={styles.forgotText} className="hoverUnderline">Forgot Password</span>?
                  </p>
                </div>

                <div style={styles.buttonGroup}>
                    <CommonButton text="Login" onClick={() => handleSubmit(true)} />
                </div>


                <div style={styles.footer}>
                  <p style={styles.footerText}>
                      Don't have an account?{" "}
                      <span className="hoverUnderline" style={styles.footerLink}>
                      Sign up
                      </span>
                  </p>
                </div>
            </div>
        </div>
    )
}