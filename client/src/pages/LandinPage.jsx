// src/pages/Landing.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { 
    ArrowRight, Play, Shield, Zap, Users, BarChart3, 
    CheckCircle, Star, Clock, Wrench, FileText, 
    TrendingUp, Award, Headphones, Gauge, Car,
    Calendar, CreditCard, Bell, Settings
} from "lucide-react";

export default function Landing() {
    const navigate = useNavigate();
    const { isDark } = useTheme();
    const [activeFeature, setActiveFeature] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // Auto-rotate features
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const features = [
        {
            icon: Wrench,
            title: "Smart Job Management",
            description: "AI-powered job scheduling and tracking with real-time updates",
            color: "from-blue-500 to-cyan-500",
            stats: "50% faster workflow"
        },
        {
            icon: Users,
            title: "Customer Portal",
            description: "Give customers real-time updates on their vehicle status",
            color: "from-purple-500 to-pink-500",
            stats: "98% satisfaction rate"
        },
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description: "Deep insights into your business performance and growth",
            color: "from-orange-500 to-red-500",
            stats: "3x revenue growth"
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            description: "Bank-level encryption and automated backups",
            color: "from-green-500 to-emerald-500",
            stats: "99.9% uptime"
        }
    ];

    const testimonials = [
        {
            name: "Rajesh Kumar",
            company: "Kumar Auto Works",
            image: "https://i.pravatar.cc/150?img=1",
            rating: 5,
            text: "Motor Desk transformed our garage operations. We've doubled our efficiency and customer satisfaction is through the roof!"
        },
        {
            name: "Priya Sharma",
            company: "Speedy Motors",
            image: "https://i.pravatar.cc/150?img=2",
            rating: 5,
            text: "The analytics dashboard alone is worth it. We can now make data-driven decisions that have increased our revenue by 40%."
        },
        {
            name: "Ahmed Ali",
            company: "Elite Auto Care",
            image: "https://i.pravatar.cc/150?img=3",
            rating: 5,
            text: "Customer love the real-time updates. It's reduced our phone calls by 70% and improved our Google reviews significantly."
        }
    ];

    const stats = [
        { value: "10,000+", label: "Active Garages", icon: Car },
        { value: "2M+", label: "Jobs Completed", icon: CheckCircle },
        { value: "99.9%", label: "Uptime", icon: Gauge },
        { value: "4.9/5", label: "User Rating", icon: Star }
    ];

    return (
        <div className={`min-h-screen ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-20 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeInUp">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                            <Zap className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                Trusted by 10,000+ garages worldwide
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            <span className="block">The Future of</span>
                            <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                                Garage Management
                            </span>
                        </h1>

                        <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-lg`}>
                            Streamline operations, delight customers, and grow your automotive business with our AI-powered CRM platform.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => navigate("/pricing")}
                                className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                            >
                                <span>Start Free Trial</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => setIsVideoPlaying(true)}
                                className={`group px-8 py-4 rounded-2xl border-2 font-semibold backdrop-blur-sm transition-all duration-300 flex items-center gap-3 ${
                                    isDark 
                                        ? 'border-white/20 hover:bg-white/10' 
                                        : 'border-gray-300 hover:bg-gray-100'
                                }`}
                            >
                                <Play className="w-5 h-5" />
                                <span>Watch Demo</span>
                            </button>
                        </div>

                        <div className={`flex items-center gap-8 pt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-green-500" />
                                <span className="text-sm">Bank-level Security</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-500" />
                                <span className="text-sm">24/7 Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Interactive Feature Display */}
                    <div className="relative animate-fadeInUp animation-delay-200">
                        <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                            isDark ? 'bg-gray-800/50' : 'bg-white'
                        } backdrop-blur-xl border ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                            {/* Feature Tabs */}
                            <div className="p-8">
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {features.map((feature, index) => {
                                        const Icon = feature.icon;
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => setActiveFeature(index)}
                                                className={`p-4 rounded-2xl transition-all duration-300 ${
                                                    activeFeature === index
                                                        ? `bg-gradient-to-r ${feature.color} text-white shadow-lg scale-105`
                                                        : isDark 
                                                            ? 'bg-gray-700/50 hover:bg-gray-700' 
                                                            : 'bg-gray-100 hover:bg-gray-200'
                                                }`}
                                            >
                                                <Icon className="w-8 h-8 mx-auto mb-2" />
                                                <p className="text-xs font-medium">{feature.title}</p>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Active Feature Details */}
                                <div className="space-y-4 animate-fadeIn">
                                    <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
                                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                        {features[activeFeature].description}
                                    </p>
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                                        isDark ? 'bg-white/10' : 'bg-gray-100'
                                    }`}>
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-medium">{features[activeFeature].stats}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold shadow-lg animate-bounce">
                            Live Now!
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className={`text-center p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
                                        isDark 
                                            ? 'bg-white/5 border-white/10' 
                                            : 'bg-white border-gray-200 shadow-lg'
                                    }`}
                                >
                                    <Icon className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
                                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Everything You Need to
                            <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                Run Your Garage
                            </span>
                        </h2>
                        <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                            Comprehensive tools designed specifically for modern automotive workshops
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Calendar, title: "Smart Scheduling", desc: "AI-powered appointment system that maximizes your bay utilization" },
                            { icon: FileText, title: "Digital Invoicing", desc: "Create and send professional invoices in seconds" },
                            { icon: Bell, title: "Automated Reminders", desc: "Never miss a service appointment with smart notifications" },
                            { icon: CreditCard, title: "Payment Processing", desc: "Accept all payment methods with integrated POS" },
                            { icon: Settings, title: "Inventory Management", desc: "Track parts and supplies with automatic reorder alerts" },
                            { icon: Headphones, title: "24/7 Support", desc: "Get help whenever you need it from our expert team" }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
                                        isDark 
                                            ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                                            : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
                                    }`}
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={`py-20 px-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Loved by Garage Owners
                            <span className="block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                                Worldwide
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 ${
                                    isDark 
                                        ? 'bg-white/5 border-white/10' 
                                        : 'bg-white border-gray-200 shadow-lg'
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className={`italic ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                    "{testimonial.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`p-12 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-grid-white/10"></div>
                        <div className="relative z-10 space-y-6">
                            <Award className="w-16 h-16 mx-auto text-yellow-400" />
                            <h2 className="text-4xl lg:text-5xl font-bold text-white">
                                Ready to Transform Your Garage?
                            </h2>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Join thousands of successful garage owners. Start your free 14-day trial today.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center pt-4">
                                <button
                                    onClick={() => navigate("/pricing")}
                                    className="group px-8 py-4 rounded-2xl bg-white text-indigo-600 font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                                >
                                    <span>Start Free Trial</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => navigate("/login")}
                                    className="px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                                >
                                    Sign In
                                </button>
                            </div>
                            <p className="text-sm text-white/70 pt-4">
                                No credit card required • 14-day free trial • Cancel anytime
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}