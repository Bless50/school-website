import { motion } from 'framer-motion';
import { Star, Users, Briefcase, Zap, Trophy } from 'lucide-react';

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={className}
    >
        {children}
    </motion.div>
);

const About = () => {
    return (
        <div className="font-sans">
            {/* 1. HERO SECTION */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/building1.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold mb-6"
                    >
                        EST. 2019
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        About <span className="text-primary">INIESAT</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
                    >
                        Shaping the future through Excellence in Engineering, Science, Art, and Technology.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                {/* 2. OUR HISTORY */}
                <Section className="mb-32 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/5 rounded-3xl transform -rotate-2"></div>
                        <img
                            src="/images/building.webp"
                            alt="INIESAT Campus"
                            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                        />

                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-dark mb-8">Building a Legacy of Knowledge</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            INIESAT (International Institute of Engineering Science Art and Technology) stands as a beacon of learning at Chefferie de Ngoh, just moments from Carrefour Ebanda Simbock.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Since our authorization by the Ministry of Higher Education in August 2019, we have grown into a professional powerhouse. Our Founder, <span className="font-bold text-dark">Dr. GERALDINE NDIP</span>, envisioned an institution where academic rigor meets practical application.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><Briefcase className="w-6 h-6" /></div>
                                <span className="font-bold text-dark">Professional</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl"><Zap className="w-6 h-6" /></div>
                                <span className="font-bold text-dark">Innovative</span>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 3. YOUTH DAY ACHIEVEMENT */}
                <Section className="mb-32">
                    <div className="bg-gradient-to-br from-dark to-gray-900 rounded-3xl overflow-hidden shadow-2xl text-white">
                        <div className="grid lg:grid-cols-2">
                            <div className="p-12 lg:p-20 flex flex-col justify-center">
                                <div className="inline-flex items-center gap-2 text-yellow-500 font-bold tracking-wider uppercase text-sm mb-6">
                                    <Trophy className="w-5 h-5" /> 1st Prize Winner
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Champions of the Youth Day March Past</h2>
                                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                    Discipline, coordination, and pride. Our students showcased exceptional spirit at the Youth Day celebrations, taking home the 1st Place Trophy among all participating institutions. This victory reflects our commitment to excellence in all endeavors.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                        <div className="text-3xl font-bold text-yellow-400 mb-1">1st</div>
                                        <div className="text-sm text-gray-300">Overall Position</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                        <div className="text-3xl font-bold text-white mb-1">2025</div>
                                        <div className="text-sm text-gray-300">Youth Day Edition</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-[500px] lg:h-auto">
                                <img
                                    src="/images/youthday/matchpass.webp"
                                    alt="Students Marching"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark/80 lg:to-dark" />
                                {/* Floating Trophy Image */}
                                <motion.img
                                    initial={{ y: 20, rotate: -5 }}
                                    whileInView={{ y: 0, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                    src="/images/youthday/price.png"
                                    alt="Winner Trophy"
                                    className="absolute bottom-10 right-10 w-48 drop-shadow-2xl z-20"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 4. MISSION & VISION */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    <Section className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:border-primary/30 transition-colors group">
                        <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To provide a world-class education that combines engineering, science, art, and technology to foster innovation, critical thinking, and professional excellence. We aim to equip our students with the knowledge and skills necessary to make a significant impact.
                        </p>
                    </Section>
                    <Section className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:border-primary/30 transition-colors group">
                        <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Star className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To be a leading national institution recognized for excellence in education, research, and community engagement. We strive to create an inclusive and dynamic learning environment that inspires students to achieve their full potential.
                        </p>
                    </Section>
                </div>

                {/* 5. FOUNDING DIRECTOR */}
                <Section className="mb-32">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-primary/5 rounded-3xl p-12">
                        <div className="w-full md:w-1/3">
                            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform translate-y-4"></div>
                                <img
                                    src="/images/founder-image.jpg"
                                    alt="Dr. Geraldine Ndip"
                                    className="relative rounded-full w-full h-full object-cover border-8 border-white shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 text-center md:text-left">
                            <h3 className="text-primary font-bold uppercase tracking-widest mb-2">Founding Director</h3>
                            <h2 className="text-4xl font-bold text-dark mb-6">Dr. GERALDINE NDIP</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                                "As a Petroleum Engineer, returning to Cameroon to establish INIESAT was a dream born of necessity. We are here to bridge the gap between theory and practice, creating not just learners, but leaders."
                            </p>
                            <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm text-gray-800 font-medium">
                                Learners Today, Leaders Tomorrow
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 6. CAMPUS LIFE */}
                <Section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-dark mb-4">Campus Life</h2>
                        <p className="text-gray-600">A vibrant community of scholars and innovators</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
                        <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                            <img src="/images/biomedical/5.jpg" alt="Lab Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold">Practical Labs</span>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden relative group">
                            <img src="/images/civil work.webp" alt="Field Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="rounded-2xl overflow-hidden relative group">
                            <img src="/images/matriculation/events.webp" alt="Events" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="col-span-2 rounded-2xl overflow-hidden relative group">
                            <img src="/images/youthday/matchpass.webp" alt="Community" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-bold">Community Spirit</span>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default About;
