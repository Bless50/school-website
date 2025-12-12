
import { Award, Calendar, CheckCircle, Clock, Phone, School, User, MapPin, Mail, Globe, Facebook, Twitter } from 'lucide-react';


const ScholarshipDetail = () => {
    return (
        <div className="font-sans pt-24 pb-20 bg-gray-50">
            {/* HER0 SECTION */}
            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4">
                    <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-4">URGENT: DEADLINE DEC 22</span>
                    <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl">Melissa Ndip Memorial Scholarship Program 2025/2026</h1>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl">
                        INIESAT offers 300 full engineering scholarships to Cameroonian youth. Ministry-accredited. US partnership.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base border-t border-white/20 pt-8">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-yellow-400" />
                            <div>
                                <p className="opacity-75 text-xs uppercase tracking-wider">Date Posted</p>
                                <p className="font-bold">December 11, 2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6 text-red-400" />
                            <div>
                                <p className="opacity-75 text-xs uppercase tracking-wider">Application Deadline</p>
                                <p className="font-bold">December 22, 2025</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <School className="w-6 h-6 text-green-400" />
                            <div>
                                <p className="opacity-75 text-xs uppercase tracking-wider">Program Start</p>
                                <p className="font-bold">January 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 grid lg:grid-cols-3 gap-8">
                {/* LEFT CONTENT COLUMN */}
                <div className="lg:col-span-2 space-y-12">

                    {/* MESSAGE FROM PRESIDENT */}
                    <section className="bg-white p-8 rounded-3xl shadow-sm">
                        <div className=" prose max-w-none text-gray-700">
                            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                                <User className="w-6 h-6" /> Message from the President
                            </h2>
                            <p className="mb-4">
                                Dr. Ndip Geraldine Oyebog, Founder and President of the Board of Directors of the International Institute of Engineering Science Arts and Technology (INIESAT), invites Cameroonian youth in engineering, science, and technology to apply for a full scholarship opportunity.
                            </p>
                            <p className="p-6 bg-primary/5 rounded-xl border-l-4 border-primary italic">
                                "In memory of her late daughter, <strong>Barrister Melissa Ndip</strong>, who dedicated her life to empowering Cameroonian youth, Dr. Ndip is offering <strong>300 full tuition scholarships</strong> across six engineering departments."
                            </p>
                        </div>
                    </section>

                    {/* ABOUT INIESAT */}
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">About INIESAT</h2>
                        <p className="text-gray-600 mb-6">
                            INIESAT has emerged as a leader in promoting innovation, invention, and creation among its students over the past six years. Our mission is to graduate students who can become leaders and inventors, utilizing Cameroon's resources to contribute to the country's sustainable development.
                        </p>
                        <ul className="space-y-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            {[
                                "Ministry of Higher Education Accreditation (Authorization No.19-07922/L/MINESUP/SG/DDES/ESUP/SDA/OAGS of 07 August 2019)",
                                "Mentored by the University of Douala for Bachelor and Master Degree programs",
                                "Partnership with Montana Technological University (USA) with student retention for advanced studies",
                                "Students have developed: mechanical road sweeping machines, campus structure prototypes, vegetable cutters, and more"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* SCHOLARSHIP DETAILS */}
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-4">Scholarship Coverage & Departments</h2>
                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                            {[
                                "Full tuition for the entire program",
                                "No application fees",
                                "No hidden costs"
                            ].map((item, i) => (
                                <div key={i} className="bg-green-50 border border-green-100 p-4 rounded-xl text-center">
                                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                    <p className="font-bold text-green-800 text-sm">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
                                        <th className="p-4 font-semibold">Department</th>
                                        <th className="p-4 font-semibold">Available Spots</th>
                                        <th className="p-4 font-semibold">Contact</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-sm">
                                    {[
                                        { dept: "Petroleum Engineering", spots: 50, contact: "+237 676 237 717" },
                                        { dept: "Mining Engineering", spots: 50, contact: "+237 676 237 717" },
                                        { dept: "Computer Engineering", spots: 50, contact: "+237 695 361 719" },
                                        { dept: "Civil Engineering", spots: 50, contact: "+237 652 642 760" },
                                        { dept: "Mechanical Engineering", spots: 50, contact: "+237 678 236 052" },
                                        { dept: "Electrical Engineering", spots: 50, contact: "+237 678 236 052" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50">
                                            <td className="p-4 font-medium text-gray-800">{row.dept}</td>
                                            <td className="p-4 text-gray-600">{row.spots}</td>
                                            <td className="p-4 font-mono text-primary">{row.contact}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr className="bg-gray-50 font-bold text-gray-800">
                                        <td className="p-4">Total Scholarships</td>
                                        <td className="p-4" colSpan={2}>300</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </section>

                    {/* REQUIREMENTS & PROCESS */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4">Eligibility</h2>
                            <ul className="space-y-2 text-gray-700 bg-white p-6 rounded-2xl shadow-sm h-full">
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>High school graduates with a background in engineering, science, and technology</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>Cameroonian citizens</li>
                                <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>Commitment to academic excellence and innovation</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-dark mb-4">Required Documents</h2>
                            <ul className="space-y-3 text-gray-700 bg-white p-6 rounded-2xl shadow-sm h-full list-decimal list-inside">
                                <li><strong>Application Letter</strong> (1 page)</li>
                                <li><strong>4 Passport-Size Photos</strong></li>
                                <li><strong>High School Transcripts</strong></li>
                                <li><strong>Photocopy of ID Card</strong></li>
                            </ul>
                        </section>
                    </div>

                    {/* HOW TO APPLY */}
                    <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                        <h2 className="text-2xl font-bold text-primary mb-6">How to Apply</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Physical Submission</h3>
                                    <p className="text-gray-600 text-sm">
                                        INIESAT Campus A<br />
                                        Carrefour Ebanda, Chefferie de Ngoh, SIMBOCK<br />
                                        Douala, Cameroon
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">For Questions</h3>
                                    <p className="text-gray-600 text-sm">
                                        WhatsApp: +237 682 348 347<br />
                                        Email: contact@iniesat.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-2xl font-bold text-dark mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {[
                                { q: "Is this scholarship really free?", a: "Yes. Full tuition is covered. No application fees. No hidden costs." },
                                { q: "Can I apply if I graduated high school several years ago?", a: "Yes, as long as you have a high school diploma in science/technology subjects." },
                                { q: "What if I can't afford passport photos?", a: "Contact us at +237 682 348 347. We may be able to assist." },
                                { q: "Can I choose any department?", a: "Yes, but contact the specific department number listed to confirm availability." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                                    <p className="text-gray-600">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* RIGHT SIDEBAR */}
                <div className="lg:col-span-1 space-y-8">

                    {/* DEADLINE COUNTDOWN CARD */}
                    <div className="bg-red-600 text-white p-6 rounded-3xl shadow-xl sticky top-24">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Clock className="w-5 h-5" /> Time is running out!
                        </h3>
                        <div className="text-center bg-white/10 rounded-xl p-4 mb-6">
                            <p className="text-sm uppercase tracking-widest opacity-80 mb-1">Deadline</p>
                            <p className="text-3xl font-bold">Dec 22, 2025</p>
                        </div>
                        <a
                            href="https://wa.me/237682348347"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-white text-red-600 font-bold py-3 rounded-full hover:bg-gray-100 transition-colors mb-3"
                        >
                            APPLY NOW VIA WHATSAPP
                        </a>
                        <p className="text-center text-xs opacity-75">
                            Or visit our campus in Douala
                        </p>
                    </div>

                    {/* CONTACT INFO */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-gray-900 mb-4">Contact Admissions</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+237 682 348 347</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>contact@iniesat.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Globe className="w-4 h-4 text-primary" />
                                <span>www.iniesat.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* SHARE */}
                    <div className="p-6">
                        <h3 className="font-bold text-gray-900 mb-4 text-center">Share This Opportunity</h3>
                        <div className="flex justify-center gap-4">
                            <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"><Facebook className="w-5 h-5" /></button>
                            <button className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600"><Twitter className="w-5 h-5" /></button>
                            <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600"><Phone className="w-5 h-5" /></button>
                        </div>
                    </div>

                </div>
            </div>

            {/* IN MEMORIAM */}
            <div className="container mx-auto px-4 mt-20">
                <div className="bg-black text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Award className="w-12 h-12 mx-auto text-yellow-500 mb-6" />
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">In Memory of Barrister Melissa Ndip</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Barrister Melissa dedicated her life to empowering Cameroonian youth, believing deeply in education as the foundation for national development. This scholarship continues her mission by providing opportunities to young Cameroonians who have the potential but lack the financial means to pursue engineering education.
                        </p>
                        <p className="font-serif italic text-lg text-white">"Transforming lives, one student at a time."</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ScholarshipDetail;
