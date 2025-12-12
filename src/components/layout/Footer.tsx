
import { Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Links Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary-light">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Admissions', path: '/admission' },
                                { name: 'Academics', path: '/academic' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary-light">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone size={18} />
                                <span className="text-sm">6 82 34 83 47</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail size={18} />
                                <span className="text-sm">contact@iniesat.org</span>
                            </div>
                            <a
                                href="https://www.facebook.com/profile.php?id=100067598576424"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center space-x-3 text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                <Facebook size={18} />
                                <span className="text-sm">Follow us on Facebook</span>
                            </a>
                        </div>
                    </div>

                    {/* Location Column */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-primary-light">Location</h3>
                        <div className="flex items-start space-x-3 text-gray-400">
                            <MapPin size={20} className="mt-1 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">
                                Chefferie de Ngoh, 200m after Carrefour Ebanda,<br />
                                Yaoundé, Cameroon
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} INIESAT. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
