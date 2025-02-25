import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () =>
{
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    const [errors, setErrors] = useState({}); // 添加错误状态

    const onFormUpdate = (category, value) =>
    {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    // 🔹 添加表单验证逻辑
    const validate = () =>
    {
        let newErrors = {};
        if (!formDetails.firstName.trim()) newErrors.firstName = "First Name is required.";
        if (!formDetails.lastName.trim()) newErrors.lastName = "Last Name is required.";
        if (!formDetails.email.trim() || !/\S+@\S+\.\S+/.test(formDetails.email))
            newErrors.email = "Valid email is required.";
        if (!formDetails.message.trim()) newErrors.message = "Message is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (!validate()) return;

        setButtonText("Sending...");

        emailjs
            .send(
                "service_dh1qdpx", // 替换成你的 Service ID
                "template_qb3ssid", // 替换成你的 Template ID
                {
                    firstName: formDetails.firstName,
                    lastName: formDetails.lastName,
                    email: formDetails.email,
                    phone: formDetails.phone,
                    message: formDetails.message,
                },
                "jmOrTcCx7hy-NbD-U" // 替换成你的 Public Key
            )
            .then(() =>
            {
                setStatus({ success: true, message: "Message sent successfully" });
                setFormDetails(formInitialDetails); // 清空表单
            })
            .catch((error) =>
            {
                console.error("Email sending error:", error);
                setStatus({ success: false, message: "Something went wrong, please try again later." });
            })
            .finally(() =>
            {
                setButtonText("Send");
            });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                {/* "align-items-center" */}
                <Row className="d-flex justify-content-center align-items-center">
                    {/* <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col> */}
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    value={formDetails.firstName}
                                                    placeholder="First Name"
                                                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                                                />
                                                {errors.firstName && <p className="error">{errors.firstName}</p>}
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    value={formDetails.lastName}
                                                    placeholder="Last Name"
                                                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                                                />
                                                {errors.lastName && <p className="error">{errors.lastName}</p>}
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="email"
                                                    value={formDetails.email}
                                                    placeholder="Email Address"
                                                    onChange={(e) => onFormUpdate("email", e.target.value)}
                                                />
                                                {errors.email && <p className="error">{errors.email}</p>}
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="tel"
                                                    value={formDetails.phone}
                                                    placeholder="Phone No."
                                                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                                                />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    value={formDetails.message}
                                                    placeholder="Message"
                                                    onChange={(e) => onFormUpdate("message", e.target.value)}
                                                ></textarea>
                                                {errors.message && <p className="error">{errors.message}</p>}
                                                <button type="submit">
                                                    <span>{buttonText}</span>
                                                </button>
                                            </Col>
                                            {status.message && (
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>
                                                        {status.message}
                                                    </p>
                                                </Col>
                                            )}
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
