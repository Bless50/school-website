
import { motion } from 'framer-motion';
import { CheckCircle, FileText } from 'lucide-react';

const RequirementsList = ({ title, items }: { title: string, items: string[] }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6" />
            {title}
        </h3>
        <ul className="space-y-4">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

const Admissions = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 bg-light">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-dark mb-4"
                    >
                        Admissions
                    </motion.h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Join INIESAT and embark on a transformative educational journey.
                        Here is everything you need to know about our registration requirements.
                    </p>
                </div>

                {/* Requirements Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <RequirementsList
                        title="HND Requirements"
                        items={[
                            "Photocopy of National ID Card (N.I.C)",
                            "1 Passport size photo",
                            "Photocopy of A/L or BACC or equivalents",
                            "Photocopy of Birth Certificate"
                        ]}
                    />
                    <RequirementsList
                        title="Bachelor Degree"
                        items={[
                            "Any HND / BTS / HPD certificate",
                            "Photocopy of National ID Card (N.I.C)",
                            "1 Passport size photo",
                            "Photocopy of A/L or BACC or equivalents"
                        ]}
                    />
                    <RequirementsList
                        title="Master Degree"
                        items={[
                            "Bachelor's Degree certificate",
                            "Photocopy of National ID Card (N.I.C)",
                            "1 Passport size photo",
                            "Photocopy of A/L or BACC or equivalents"
                        ]}
                    />
                </div>

                {/* Call to Action */}
                <div className="mt-20 text-center">
                    <div className="bg-primary/5 rounded-3xl p-12 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-primary mb-4">Ready to Apply?</h2>
                        <p className="text-gray-600 mb-8">Visit our campus or contact us for more information.</p>
                        <a href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors">
                            Contact Admissions Office
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Admissions;
