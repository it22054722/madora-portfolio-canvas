import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Calendar, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.topic) newErrors.topic = "Please select a topic";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxPWyQC_SdupKRMMUscaVbuYKlPCxmjwnTDdqJrQ-0XPgV2TZxoznK5xneA2dxYQDx7Sw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setSubmitStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", topic: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { icon: Mail, label: "Response Time", value: "Within 24 hours" },
    { icon: Calendar, label: "Available For", value: "Freelance & Full-time" },
    { icon: Globe, label: "Located In", value: "Sri Lanka (GMT+5:30)" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/it22054722", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/madora-weerasinghe?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/madora2001?s=11", label: "X" },
  ];

  return (
    <section id="contact" className="w-full">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0a0a0a] flex flex-col justify-center px-8 md:px-20 py-16 md:py-32 lg:min-h-screen"
        >
          <div className="max-w-[500px]">
            <p className="text-[11px] font-medium uppercase tracking-[2.5px] text-white/50 mb-8">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] tracking-[-0.5px] mb-7 max-w-[500px]">
              Let's Work Together
            </h2>
            <p className="text-base md:text-[17px] font-light text-white/65 leading-[1.7] mb-12 max-w-[480px]">
              Ready to bring your project to life? Reach out to discuss your ideas, ask questions, or explore collaboration opportunities. I'm here to help turn your vision into reality.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#4679E0]/10 border border-[#4679E0]/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#4679E0]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg mb-1">{stat.value}</p>
                    <p className="text-white/50 text-sm font-light">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4679E0] hover:border-[#4679E0] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-b from-[#4679E0] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center px-8 md:px-16 py-16 md:py-20 lg:min-h-screen"
        >
          <div className="bg-white rounded-[20px] p-9 md:p-11 shadow-[0_24px_80px_rgba(0,0,0,0.25)] max-w-[500px] w-full">
            {isSubmitting ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-16"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-16 h-16 border-4 border-[#4679E0]/20 border-t-[#4679E0] rounded-full mb-6"
                />
                <motion.p
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-lg font-medium text-[#111827]"
                >
                  Sending your message...
                </motion.p>
              </motion.div>
            ) : submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                  className="relative w-20 h-20 mx-auto mb-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#4679E0] to-[#5A8DF5] rounded-full opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4679E0] to-[#5A8DF5] rounded-full flex items-center justify-center">
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl font-bold text-[#111827] mb-2"
                >
                  Message Sent!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[#6b7280]"
                >
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </motion.p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-5">
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="relative overflow-hidden bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 px-4 py-4 rounded-lg"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-red-800 font-semibold text-sm">Oops! Something went wrong</p>
                        <p className="text-red-700 text-xs mt-1">Please try again or contact me directly.</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {/* First & Last Name */}
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName" className="text-[13px] font-medium text-[#1f2937] mb-1.5 block">First name*</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`h-11 border rounded-md px-3.5 py-3 text-[15px] text-[#111827] bg-white focus-visible:ring-2 focus-visible:ring-[#4679E0] focus-visible:ring-offset-0 focus-visible:border-[#4679E0] transition-all ${errors.firstName ? "border-red-500" : "border-[#d1d5db]"}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[13px] font-medium text-[#1f2937] mb-1.5 block">Last name*</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`h-11 border rounded-md px-3.5 py-3 text-[15px] text-[#111827] bg-white focus-visible:ring-2 focus-visible:ring-[#4679E0] focus-visible:ring-offset-0 focus-visible:border-[#4679E0] transition-all ${errors.lastName ? "border-red-500" : "border-[#d1d5db]"}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-[13px] font-medium text-[#1f2937] mb-1.5 block">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`h-11 border rounded-md px-3.5 py-3 text-[15px] text-[#111827] bg-white focus-visible:ring-2 focus-visible:ring-[#4679E0] focus-visible:ring-offset-0 focus-visible:border-[#4679E0] transition-all ${errors.email ? "border-red-500" : "border-[#d1d5db]"}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Topic Dropdown */}
                <div>
                  <Label htmlFor="topic" className="text-[13px] font-medium text-[#1f2937] mb-1.5 block">Topic*</Label>
                  <Select
                    value={formData.topic}
                    onValueChange={(value) => {
                      setFormData((prev) => ({ ...prev, topic: value }));
                      if (errors.topic) setErrors((prev) => ({ ...prev, topic: "" }));
                    }}
                  >
                    <SelectTrigger
                      id="topic"
                      className={`h-11 border rounded-md px-3.5 text-[15px] text-[#111827] bg-white focus:ring-2 focus:ring-[#4679E0] focus:ring-offset-0 focus:border-[#4679E0] transition-all [&>span]:text-[#111827] ${errors.topic ? "border-red-500" : "border-[#d1d5db]"}`}
                    >
                      <SelectValue placeholder="Please select" className="text-[#111827]" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="general" className="text-[#111827]">General Inquiry</SelectItem>
                      <SelectItem value="proposal" className="text-[#111827]">Project Proposal</SelectItem>
                      <SelectItem value="freelance" className="text-[#111827]">Freelance Work</SelectItem>
                      <SelectItem value="fulltime" className="text-[#111827]">Full-time Opportunity</SelectItem>
                      <SelectItem value="other" className="text-[#111827]">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.topic && <p className="text-red-500 text-xs mt-1">{errors.topic}</p>}
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-[13px] font-medium text-[#1f2937] mb-1.5 block">Message*</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`min-h-[130px] border rounded-md px-3.5 py-3 text-[15px] text-[#111827] leading-[1.6] resize-vertical bg-white focus-visible:ring-2 focus-visible:ring-[#4679E0] focus-visible:ring-offset-0 focus-visible:border-[#4679E0] transition-all ${errors.message ? "border-red-500" : "border-[#d1d5db]"}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#0a0a0a] text-white hover:bg-[#4679E0] font-medium text-base px-8 py-[15px] h-[50px] rounded-md mt-1 transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(70,121,224,0.3)] active:translate-y-0 active:shadow-[0_4px_12px_rgba(70,121,224,0.2)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>

                <p className="text-[11px] font-light text-[#6b7280] text-center leading-[1.5] mt-4">
                  By pressing submit you agree to the{" "}
                  <a href="#" className="text-[#6b7280] hover:text-[#4679E0] hover:underline transition-colors">terms of service</a> and{" "}
                  <a href="#" className="text-[#6b7280] hover:text-[#4679E0] hover:underline transition-colors">privacy policy</a>
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};