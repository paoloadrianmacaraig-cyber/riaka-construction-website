'use client';

import { useState } from 'react';

// Facebook Messenger icon for direct inquiry chat
const FacebookMessengerIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.735 7.205V22l3.39-1.86c.92.255 1.89.39 2.875.39 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.06 12.443-2.715-2.895-5.3 2.895 5.828-6.19 2.784 2.895 5.231-2.895-5.828 6.19z" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setResponseMsg('');

    try {
      // Prepared for PHPMailer: endpoint can be configured via environment variable or default to /api/contact
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('success');
        setResponseMsg(result.message || 'Thank you! Your quote request has been sent successfully.');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          inquiry: '',
          message: '',
        });
      } else {
        setStatus('error');
        setResponseMsg(result.message || 'Failed to send message. Please check the fields and try again.');
      }
    } catch {
      setStatus('error');
      setResponseMsg('An error occurred while sending your request. Please try calling us directly at 0918 408 0396.');
    }
  };

  return (
    <section id="contact" className="relative pt-6 pb-20 lg:pt-8 lg:pb-28 px-6 lg:px-16 bg-navy text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: RIAKA Information & Google Maps View */}
          <div className="lg:col-span-6 flex flex-col h-full justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                Let&apos;s Build Something{' '}
                <span className="text-skyblue">
                  Exceptional.
                </span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
                Got a project in mind? We provide transparent quotations, detailed bills of materials, and realistic timelines with no generic proposals or hidden costs.
              </p>

              {/* Quick Contact Links (boxes of the icons removed) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <a
                  href="tel:+639184080396"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-white/[0.06] transition-all group"
                >
                  <svg className="w-5 h-5 text-white/90 group-hover:text-white group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-300 tracking-wider">Direct Call</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">0918 408 0396</div>
                  </div>
                </a>

                <a
                  href="mailto:riaka.construction@yahoo.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-white/[0.06] transition-all group"
                >
                  <svg className="w-5 h-5 text-white/90 group-hover:text-white group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-300 tracking-wider">Email Us</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate max-w-[180px] group-hover:text-white transition-colors">riaka.construction@yahoo.com</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Google Maps View Embed (OFFICE LOCATION removed, flex-1 so bottoms align) */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4 backdrop-blur-sm mt-4 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-end mb-3 px-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=M.H.+Del+Pilar+St,+Lemery,+Batangas,+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              <div className="relative w-full flex-1 min-h-[290px] rounded-xl overflow-hidden border border-white/10 shadow-inner">
                <iframe
                  title="RIAKA Construction Office Location - Lemery, Batangas"
                  src="https://maps.google.com/maps?q=M.H.+Del+Pilar+St,+Lemery,+Batangas,+Philippines&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter brightness-[0.88] contrast-[1.05]"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="mt-3.5 flex items-start gap-2.5 px-1 text-xs text-gray-400">
                <svg className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>M.H. Del Pilar St., Lemery, Philippines, 4209 &bull; Mon – Sat (8:00 AM – 5:00 PM)</span>
              </div>
            </div>
          </div>

          {/* Right Column: "Get a Quote" Form Box */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="bg-[#1c2e4a]/95 border border-white/15 rounded-2xl p-6 sm:p-9 shadow-2xl backdrop-blur-md h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-7">
                  Get a Quote
                </h2>

                {status === 'success' ? (
                  <div className="py-12 px-6 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Quote Request Received!</h3>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                      {responseMsg || 'Thank you for reaching out to RIAKA Construction. Our engineering team will review your project details and contact you shortly.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-4 inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider uppercase border border-white/20 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First name * & Last name * (Two Column) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first_name" className="block text-sm font-medium text-white mb-2">
                          First name <span className="text-white">*</span>
                        </label>
                        <input
                          id="first_name"
                          type="text"
                          name="first_name"
                          required
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          className="w-full bg-[#15243b] border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="last_name" className="block text-sm font-medium text-white mb-2">
                          Last name <span className="text-white">*</span>
                        </label>
                        <input
                          id="last_name"
                          type="text"
                          name="last_name"
                          required
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          className="w-full bg-[#15243b] border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email * */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email <span className="text-white">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full bg-[#15243b] border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-colors"
                      />
                    </div>

                    {/* Contact Number * */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Contact Number <span className="text-white">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your contact number"
                        className="w-full bg-[#15243b] border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-colors"
                      />
                    </div>

                    {/* Inquiry * */}
                    <div>
                      <label htmlFor="inquiry" className="block text-sm font-medium text-white mb-2">
                        Inquiry <span className="text-white">*</span>
                      </label>
                      <input
                        id="inquiry"
                        type="text"
                        name="inquiry"
                        required
                        value={formData.inquiry}
                        onChange={handleChange}
                        placeholder="Enter your inquiry"
                        className="w-full bg-[#15243b] border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-colors"
                      />
                    </div>

                    {/* Message * */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Message <span className="text-white">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="w-full bg-[#132035] border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-colors resize-y min-h-[110px]"
                      />
                    </div>

                    {/* Error Notification if any */}
                    {status === 'error' && (
                      <div className="p-3.5 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <span>{responseMsg}</span>
                      </div>
                    )}

                    {/* Submit Button (Matches Get a Quote button) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-3.5 px-6 rounded-md font-bold text-sm sm:text-base text-white bg-navy hover:bg-[#15233a] active:bg-[#111c2f] border border-white/25 transition-all duration-150 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#081220]" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <span>Submit</span>
                        )}
                      </button>
                    </div>

                    {/* Or chat us */}
                    <div className="relative flex py-1 items-center">
                      <div className="flex-grow border-t border-white/15"></div>
                      <span className="flex-shrink mx-4 text-xs font-medium text-gray-400 uppercase tracking-wider">or chat us</span>
                      <div className="flex-grow border-t border-white/15"></div>
                    </div>

                    <a
                      href="https://m.me/RIAKAconstruction"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 rounded-md font-bold text-sm text-white bg-[#0084FF]/85 hover:bg-[#0084FF] active:bg-[#0063cc] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-[#0084FF]/25 group cursor-pointer"
                    >
                      <FacebookMessengerIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>Chat on Messenger</span>
                    </a>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
