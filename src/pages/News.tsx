import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Award, Users, Trophy } from 'lucide-react';

const News = () => {
    return (
        <div className="font-sans bg-light">
            {/* 1. HERO CAROUSEL (Simplified to single hero for now or basic slider) */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
                    style={{ backgroundImage: "url('/images/youthday/musa.webp')" }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-4"
                    >
                        <span className="text-primary">News</span> & Events
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-200"
                    >
                        Stay updated with the latest happenings at INIESAT
                    </motion.p>
                </div>
            </div>

            {/* 2. YOUTH DAY CELEBRATION SECTION */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-primary mb-4"
                    >
                        Youth Day Celebration 2025
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        INIESAT proudly secured first place in the 11th February March Pass 2025 celebration,
                        showcasing our students' spirit, discipline, and unity.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                            <img
                                src="/images/youthday/matchpass.webp"
                                alt="March Pass"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Award-Winning March Pass</h3>
                            <p className="text-gray-600">
                                Our students' precision and coordination led us to victory in the march pass competition.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                            <img
                                src="/images/IMG_5771.webp"
                                alt="Group Photo"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">Youth Day Celebration</h3>
                            <p className="text-gray-600">
                                Our students came together to celebrate with enthusiasm and pride, showcasing their school spirit.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                            <img
                                src="/images/youthday/price.png"
                                alt="Trophy"
                                className="w-full h-full object-contain bg-gray-50 p-4 transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-2">First Prize Trophy</h3>
                            <p className="text-gray-600">
                                INIESAT representatives receiving the first place trophy for our outstanding performance.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. MATRICULATION CEREMONY SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center"
                    >
                        2024 Matriculation Ceremony
                    </motion.h2>

                    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 p-6 md:p-8 mb-12">
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div className="h-[400px] rounded-2xl overflow-hidden">
                                <img
                                    src="/images/matriculation/events.webp"
                                    alt="Matriculation"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Welcoming Our New Students</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        <span className="font-medium">March 11, 2024</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <span className="font-medium">INIESAT Main Campus</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    A memorable day as we officially welcomed our new students into the INIESAT family.
                                    The ceremony marked the beginning of their academic journey with us, filled with promise and potential.
                                </p>

                                <div className="bg-white p-6 rounded-xl border border-gray-100">
                                    <h5 className="font-bold text-dark mb-4">Event Highlights</h5>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Oath Taking</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Director's Address</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Student Orientation</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Campus Tour</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. UPCOMING PROJECTS SECTION */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="order-2 lg:order-1"
                    >
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-4">
                            Community Impact
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                            Sustainable Water Supply for Ngoh Community
                        </h2>
                        <div className="prose text-gray-600 leading-relaxed space-y-4">
                            <p>
                                We are thrilled to announce an upcoming project initiated by INIESAT to provide a sustainable
                                water supply for the Ngoh community, our home.
                            </p>
                            <p>
                                This initiative, spearheaded by our dedicated proprietress, aims to improve the quality of
                                life for the residents of Ngoh by ensuring access to clean and reliable water. It reflects
                                our commitment to giving back and supporting the community that hosts us.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="order-1 lg:order-2 h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/images/projects.jpg"
                            alt="Project Location"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default News;
