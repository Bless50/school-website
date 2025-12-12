import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Briefcase, Activity, Monitor } from 'lucide-react';

const departments = [
    {
        id: 'engineering',
        label: 'Engineering',
        icon: <BookOpen className="w-5 h-5" />,
        color: 'bg-red-50 text-red-600',
        content: (
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-accent mb-4">Higher National Diploma (HND)</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><i className="bi bi-droplet-fill"></i> Petroleum & Mining</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Petroleum System & Exploitation</li>
                                <li>Drilling Technology</li>
                                <li>Petroleum Logistics</li>
                                <li>Applied Geology</li>
                                <li>Quarries Operation</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Civil Engineering</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Topography</li>
                                <li>Urban Planning</li>
                                <li>Civil Engineering Technology</li>
                                <li>Geotechnics</li>
                                <li>Building Science & Tech</li>
                                <li>Real Estate Maintenance</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Agriculture & Environment</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Agriculture & Food Science</li>
                                <li>Animal Production Tech</li>
                                <li>Crop Production Tech</li>
                                <li>Agropastoral Adviser</li>
                                <li>Agri-Entrepreneurship</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Electrical & Electronic</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Electronics</li>
                                <li>Electrotechnics</li>
                                <li>Electrical Power Systems</li>
                                <li>Maintenance of Power Systems</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Chemical Engineering</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Chemical Manufacturing</li>
                                <li>Chemical Process Tech</li>
                                <li>Chemical Laboratories</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Mechanical Engineering</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Mechanical Manufacturing</li>
                                <li>Mechanical Construction</li>
                                <li>Boiler Making & Welding</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bachelors Degree Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-accent mb-4">Bachelor's Degree (HND + 1 Year)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-primary mb-2">Agriculture & Environment</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Agriculture & Food Science</li>
                                <li>Animal Production Tech</li>
                                <li>Crop Production Tech</li>
                                <li>Agropastoral Adviser</li>
                                <li>Agri-Entrepreneurship</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Petroleum & Mining</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Mining Engineering</li>
                                <li>Petroleum Engineering</li>
                                <li>Petroleum Logistics</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Electrical & Electronic</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Electronics</li>
                                <li>Electrical Power Engineering</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Civil Engineering</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Civil Engineering Technology</li>
                                <li>Roads & Civil Engineering</li>
                                <li>Topography</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Masters Degree Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-accent mb-4">Master's Degree (Bachelor's + 2 Years)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-primary mb-2">Agriculture & Environment</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Agriculture & Food Science</li>
                                <li>Animal Production Tech</li>
                                <li>Crop Production Tech</li>
                                <li>Agropastoral Adviser</li>
                                <li>Agriculture Production</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Civil Engineering</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Civil Engineering Technology</li>
                                <li>Roads & Civil Engineering</li>
                                <li>Topography</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Electrical & Electronic</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Electronics</li>
                                <li>Electrical Power Engineering</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Petroleum & Mining</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Mining Engineering</li>
                                <li>Petroleum Reservoir Eng</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Engineering Gallery */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/engineering/e1.jpg" alt="Field Engineering" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Field Operations</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/engineering/e2.jpg" alt="Surveying" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Topography & Surveying</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/engineering/e3.jpg" alt="Lab Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Practical Labs</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'business',
        label: 'Business',
        icon: <Briefcase className="w-5 h-5" />,
        color: 'bg-blue-50 text-blue-600',
        content: (
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-accent mb-4">School of Business Administration</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-primary mb-2">National Diploma (1 Year)</h4>
                            <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                                <li>Office Automation Secretaryship</li>
                                <li>Project Management</li>
                                <li>Digital Marketing</li>
                                <li>Hotel Management</li>
                                <li>Customs and Transit</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">HND (2 Years)</h4>
                            <ul className="text-sm space-y-1 text-gray-600 list-disc list-inside">
                                <li>Logistics and Transport</li>
                                <li>Quality Management</li>
                                <li>Banking and Finance</li>
                                <li>Marketing Trade-Sales</li>
                                <li>International Trade</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Business Gallery */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/business/b1.jpg" alt="Business Seminar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Professional Seminars</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/business/b2.jpg" alt="Office Management" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Office Management</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/business/b3.jpg" alt="Team Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Collaborative Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'biomedical',
        label: 'Bio-Medical',
        icon: <Activity className="w-5 h-5" />,
        color: 'bg-green-50 text-green-600',
        content: (
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-accent mb-4">School of Bio-Medical Sciences</h3>
                    <p className="mb-6 text-gray-600">Bridging the gap between engineering and medical sciences, offering innovative solutions for health.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h5 className="font-bold text-dark mb-2">Nursing & Midwifery</h5>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h5 className="font-bold text-dark mb-2">Medical Laboratory Science</h5>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h5 className="font-bold text-dark mb-2">Pharmacy Technology</h5>
                        </div>
                    </div>
                </div>

                {/* Bio-Medical Gallery */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/biomedical/4.jpg" alt="Medical Lab" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Modern Medical Labs</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/biomedical/1.jpg" alt="Nursing Practice" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Clinical Practice</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/biomedical/6.jpg" alt="Pharmacy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Pharmacy Tech</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: 'technology',
        label: 'Technology',
        icon: <Monitor className="w-5 h-5" />,
        color: 'bg-purple-50 text-purple-600',
        content: (
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-accent mb-4">School of Technology</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-primary mb-2">Computer Engineering</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Software Engineering</li>
                                <li>Computer Science & Networks</li>
                                <li>Database Management</li>
                                <li>Graphics & Web Design</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-2">Network & Telecom</h4>
                            <ul className="text-sm space-y-1 text-gray-600">
                                <li>Telecommunications</li>
                                <li>Network Security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Technology Gallery */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/software.webp" alt="Software Engineering" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Software Development</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/computer on free trip.webp" alt="Tech Trip" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Tech Excursions</p>
                        </div>
                    </div>
                    <div className="h-48 rounded-xl overflow-hidden relative group">
                        <img src="/images/computer onsite training.webp" alt="Onsite Training" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <p className="text-white font-medium">Onsite Training</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
];

const Academic = () => {
    const [activeTab, setActiveTab] = useState(departments[0].id);

    return (
        <div className="font-sans bg-light">
            {/* 1. HERO SECTION */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
                    style={{ backgroundImage: "url('/images/defense.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 container mx-auto px-4 pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Academic <span className="text-primary">Programs</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
                    >
                        Discover a wide range of industry-aligned programs designed to prepare you for the future of work.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 min-h-screen">

                {/* Sticky Tabs Navigation */}
                <div className="sticky top-[70px] z-30 bg-light/95 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-gray-200/50 mb-10 transition-all">
                    <div className="flex overflow-x-auto gap-4 md:justify-center pb-2 hide-scrollbar">
                        {departments.map((dept) => (
                            <button
                                key={dept.id}
                                onClick={() => {
                                    setActiveTab(dept.id);
                                    window.scrollTo({ top: 400, behavior: 'smooth' }); // Optional: Scroll to content start on click if deep in page
                                }}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${activeTab === dept.id
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
                                    }`}
                            >
                                {dept.icon}
                                {dept.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content with Animation */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="scroll-mt-32"
                    >
                        {departments.find(d => d.id === activeTab)?.content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Academic;
