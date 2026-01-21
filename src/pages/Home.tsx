import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Globe, Monitor, Calculator, GraduationCap, Wifi, Bus, ShieldCheck, Zap, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import AlertBar from '../components/common/AlertBar';

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className={className}
    >
        {children}
    </motion.div>
);

const Home = () => {
    return (
        <div className="font-sans overflow-x-hidden">

            {/* SCHOLARSHIP ALERT BAR */}
            <AlertBar
                message="🎓 300 Full Scholarships Available for Engineering Students | Deadline: December 22, 2025/2026"
                linkText="Learn More →"
                linkTo="/news/melissa-ndip-memorial-scholarship-2025-2026"
            />

            {/* 1. HERO SECTION */}
            <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ scale: 1.1 }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/youthday/musa.webp')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            INTERNATIONAL INSTITUTE OF <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-white">
                                ENGINEERING, SCIENCE, ART AND TECHNOLOGY
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-light mb-8">
                            "Learners Today, Leaders Tomorrow."
                        </p>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
                        >
                            Learn More <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* 3. ABOUT US PREVIEW */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/building4.webp" alt="INIESAT Campus" className="rounded-3xl shadow-2xl w-full object-cover h-[350px]" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl font-bold text-dark mb-6">About INIESAT</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Located at Chefferie de Ngoh, INIESAT is a professional private university authorized by the Ministry of Higher Education.
                                With over 95 specialties across five schools, we bridge the gap between academic theory and practical industry skills.
                            </p>
                            <Link to="/about" className="text-primary font-bold flex items-center gap-2 group">
                                Read Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURED SCHOLARSHIP ANNOUNCEMENT */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/images/matriculation/matriculation_group_photo.webp')] bg-cover bg-center"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-24 h-24 bg-red-100 rounded-2xl flex items-center justify-center shrink-0">
                                <GraduationCap className="w-12 h-12 text-red-600" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <span className="inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full mb-3">Featured Opportunity</span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                                    300 Full Scholarships: Melissa Ndip Memorial Engineering Program
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    INIESAT is offering full tuition scholarships to 300 Cameroonian high school graduates in 6 engineering departments. Ministry-accredited. Application deadline: <strong className="text-red-600">December 22, 2025/2026</strong>.
                                </p>
                                <Link
                                    to="/news/melissa-ndip-memorial-scholarship-2025-2026"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30"
                                >
                                    Read Full Details <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. VIDEO SHOWCASE */}
            <div className="bg-dark py-20 text-white">
                <div className="container mx-auto px-4">
                    <Section className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Campus Life</h2>
                        <p className="text-gray-400">See what makes our community special</p>
                    </Section>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden shadow-2xl h-[450px] bg-black">
                            <video controls poster="public/images/secondpart.png" className="w-full h-full object-contain">
                                <source src="public/videos/Second part_1.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl overflow-hidden shadow-2xl h-[450px] bg-black">
                            <video controls poster="public/images/design machine.png" className="w-full h-full object-contain">
                                <source src="public/videos/design machine.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 5. ACADEMIC DEPARTMENTS */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <Section className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-dark mb-4">Our Departments</h2>
                        <p className="text-gray-600">Discover your path to success</p>
                    </Section>

                    <div className="flex flex-col gap-24">
                        {/* Engineering Feature */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative rounded-3xl overflow-hidden shadow-2xl group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                                <img src="/images/civil work.webp" alt="Engineering Students" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute bottom-6 left-6 z-20">
                                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Top Choice</span>
                                    <p className="text-white font-medium text-sm opacity-90">Practical training on campus</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="p-3 bg-red-100 text-red-600 rounded-2xl w-fit mb-6"><Calculator className="w-8 h-8" /></div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-dark">School of Engineering</h3>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    Our Ministry-accredited engineering programs combine rigorous academic theory with hands-on workshops. Students build real machines, from vegetable cutters to road sweepers.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {['Civil Engineering', 'Electrical Engineering', 'Mechanical Engineering', 'Petroleum Engineering', 'Chemical Engineering', 'Mining Engineering'].map((dept) => (
                                        <div key={dept} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{dept}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/academic" className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all">
                                    View Syllabus <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Technology Feature */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="order-2 lg:order-1"
                            >
                                <div className="p-3 bg-purple-100 text-purple-600 rounded-2xl w-fit mb-6"><Monitor className="w-8 h-8" /></div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-dark">School of Technology</h3>
                                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                    Master the digital world with our cutting-edge curriculum. From coding next-gen apps to securing enterprise networks, we prepare you for the highest-paying global careers.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {['Software Engineering', 'Cybersecurity', 'Network Administration', 'Digital Marketing'].map((dept) => (
                                        <div key={dept} className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                            <span className="text-gray-700 font-medium">{dept}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/academic" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all">
                                    View Syllabus <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-2xl group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-80" />
                                <img src="/images/software.webp" alt="Technology Student" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />

                            </motion.div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/academic" className="btn bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors">
                            View All Departments
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. ADMISSIONS CTA */}
            <div className="py-24 pb-32 relative bg-primary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 bg-[url('/images/matriculation/events.webp')] bg-cover bg-center"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                    >
                        Ready to Join Us?
                    </motion.h2>
                    <p className="text-xl opacity-95 mb-10 max-w-2xl mx-auto font-medium">
                        Embark on a transformative educational journey that shapes your future.
                    </p>
                    <Link to="/admission" className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary text-lg font-bold rounded-full shadow-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                        Check Requirements <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* 7. WHY CHOOSE US */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <Section className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-dark mb-4">Why Choose INIESAT</h2>
                    </Section>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { icon: GraduationCap, color: "text-blue-600 bg-blue-100", title: "University of Douala", desc: "Mentored by the University of Douala for Bachelor and Master Degree programs.", link: "/about" },
                            { icon: Award, color: "text-yellow-600 bg-yellow-100", title: "Mega Scholarships", desc: "300 Full Tuition Scholarships available for engineering departments." },
                            { icon: Wrench, color: "text-red-600 bg-red-100", title: "Practical Training", desc: "Hands-on workshops where students build real machines and prototypes." },
                            { icon: Wifi, color: "text-cyan-600 bg-cyan-100", title: "Free WiFi", desc: "High-speed internet access across the entire campus for research." },
                            { icon: ShieldCheck, color: "text-green-600 bg-green-100", title: "Accredited", desc: "Authorized by the Ministry of Higher Education (No.19-07922)." },
                            { icon: Monitor, color: "text-purple-600 bg-purple-100", title: "Free Computer Training", desc: "All freshmen receive free computer capability training." },
                            { icon: Globe, color: "text-indigo-600 bg-indigo-100", title: "Global Partnerships", desc: "Stratigic partnership with Montana Tech University (USA)." },
                            { icon: Zap, color: "text-orange-600 bg-orange-100", title: "Modern Labs", desc: "Fully equipped laboratories for chemistry, physics, and engineering." },
                            { icon: Bus, color: "text-pink-600 bg-pink-100", title: "Free Transportation", desc: "Free bus service for students to and from campus." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                                {item.link && (
                                    <Link to={item.link} className="inline-block self-start px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors">
                                        Learn More
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. ACCREDITATIONS & PARTNERSHIPS */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <Section className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-dark mb-4">Global Partnerships</h2>
                    </Section>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img src="/images/partnership.jpg" alt="Partnership" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Montana Tech University, USA</h3>
                            <p className="text-gray-600 mb-6">A strategic partnership giving our students access to world-class resources, exchange programs, and globally recognized qualifications.</p>
                            <ul className="space-y-2 text-gray-700 mb-6">
                                <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Student Exchange Programs</li>
                                <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-primary" /> Joint Research Initiatives</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-2xl font-bold text-primary mb-4">University of Douala</h3>
                            <p className="text-gray-600 mb-6">Partnering with one of Cameroon's top institutions to ensure academic excellence and nationally recognized certification.</p>
                            <Link to="/about" className="inline-block px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors">Learn More</Link>
                        </div>
                        <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg bg-black">
                            <video controls poster="/images/doualaPoster.png" className="w-full h-full object-cover">
                                <source src="/videos/iniesat-douala.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <Section>
                        <h2 className="text-4xl font-bold text-dark mb-12">Student Voices</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-8 bg-light rounded-3xl">
                                <img src="/images/testimony1.webp" alt="Mundi" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md" />
                                <p className="text-gray-600 italic mb-4">"Thank you INIESAT for this great help to our community. More grace."</p>
                                <h4 className="font-bold text-dark">Mundi Milton</h4>
                            </div>
                            <div className="p-8 bg-light rounded-3xl">
                                <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl">B</div>
                                <p className="text-gray-600 italic mb-4">"A place to be. You have peace of mind and a very responsible environment."</p>
                                <h4 className="font-bold text-dark">Benn Irene</h4>
                            </div>
                            <div className="p-8 bg-light rounded-3xl">
                                <img src="/images/testinmony3.webp" alt="SmartSana" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md" />
                                <p className="text-gray-600 italic mb-4">"Proud of our interns from INIESAT who installed a 5KVA solar system."</p>
                                <h4 className="font-bold text-dark">SmartSana Energies</h4>
                            </div>
                        </div>
                    </Section>
                </div>
            </section>
        </div>
    );
};

export default Home;
