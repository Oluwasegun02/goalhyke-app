"use client";
import React, { useState } from 'react';
import {
    ArrowLeft, MessageCircle, Users, Scale, Calendar, Dumbbell, Clock, Heart, // Page specific icons
    Square, Share2, Trophy, Zap, MessageSquare, BarChart3, // Step 4 Icons
    Activity, Drumstick, Utensils, ChevronLeft, X, CheckCircle // Fitness Icons
} from 'lucide-react';
import AppHeader from '../../../components/AppHeader';
import Sidebar from '../../../components/Sidebar';
import Footer from '../../../components/Footer';
import Communities from '../../../components/Communities';

const LoseWeightGoalWizard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Wizard State
    const [currentStep, setCurrentStep] = useState(1);

    // Modal States
    const [modalState, setModalState] = useState(null);

    // Form Data States (Tailored for Weight Loss Goals)
    const [formData, setFormData] = useState({
        targetWeight: '65',
        currentWeight: '75',
        targetDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0], // 1 year from now
        unit: 'Kg',
        goalTimeframe: '1 Year',
        outcomeFeeling: '',
        outcomeAction: '',
        challenges: {},
        accountability: {},
        visFeel: '',
        visAchieve: '',
        visMessage: '',
        refereeType: 'On your Honor',
        refereeEmail: '',
        autoAccept: false,
        supporters: ''
    });

    const updateForm = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleCheckbox = (group, key) => {
        setFormData(prev => ({
            ...prev,
            [group]: { ...prev[group], [key]: !prev[group][key] }
        }));
    };

    const handleNext = () => {
        if (currentStep < 7) {
            setCurrentStep(prev => prev + 1);
        } else {
            setModalState('commit');
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    // --- Render Steps ---

    const renderStep1 = () => (
        <div className="space-y-6 max-w-2xl w-full mx-auto">
            <div className="grid grid-cols-5 gap-4">
                {/* Target Weight Input (3/5 columns) */}
                <div className="col-span-3">
                    <label htmlFor="target-weight" className="text-gray-700 font-medium block mb-2">Target weight</label>
                    <input
                        id="target-weight"
                        type="number"
                        value={formData.targetWeight}
                        onChange={(e) => updateForm('targetWeight', e.target.value)}
                        placeholder="e.g. 65"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 text-gray-700"
                    />
                </div>
                {/* Unit Selector (2/5 columns) */}
                <div className="col-span-2">
                    <label htmlFor="unit-select" className="text-gray-700 font-medium block mb-2">Unit</label>
                    <select
                        id="unit-select"
                        value={formData.unit}
                        onChange={(e) => updateForm('unit', e.target.value)}
                        className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                    >
                        <option>Kg</option><option>Lbs</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Current Weight Input */}
                <div className="col-span-1">
                    <label htmlFor="current-weight" className="text-gray-700 font-medium block mb-2">Current weight</label>
                    <input
                        id="current-weight"
                        type="number"
                        value={formData.currentWeight}
                        onChange={(e) => updateForm('currentWeight', e.target.value)}
                        placeholder="e.g. 75"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 text-gray-700"
                    />
                </div>

                {/* Target Date Input */}
                <div className="col-span-1">
                     <label htmlFor="target-date" className="text-gray-700 font-medium block mb-2">Target date</label>
                     <input
                        id="target-date"
                        type="date"
                        value={formData.targetDate}
                        onChange={(e) => updateForm('targetDate', e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 text-gray-700"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 pt-2">
                <label className="text-gray-700 font-medium flex-1">Estimated timeframe:</label>
                <span className="text-gray-900 font-semibold w-full md:w-40 px-2.5 bg-gray-100 p-2 rounded-lg">{formData.goalTimeframe}</span>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="space-y-6 max-w-3xl w-full mx-auto">
            <div>
                <label className="block text-gray-700 font-medium mb-2">How will this weight loss make you feel?</label>
                <input type="text" placeholder="Confident, Energetic, Healthier..." className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 text-gray-700" value={formData.outcomeFeeling} onChange={(e) => updateForm('outcomeFeeling', e.target.value)} />
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">What physical activity will you be able to do?</label>
                <input type="text" placeholder="Run a 10K, Climb a mountain, Play with my kids..." className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 text-gray-700" value={formData.outcomeAction} onChange={(e) => updateForm('outcomeAction', e.target.value)} />
            </div>
        </div>
    );

    const renderStep3 = () => {
        const options = ["Late-night snacking", "Stress eating", "Skipping workouts", "Social gatherings", "Travel/Vacations", "Plateaus in progress", "Lack of motivation", "Other"];
        return (
            <div className="space-y-4 max-w-2xl w-full mx-auto">
                <p className="text-gray-700 mb-4 font-medium">What challenges might derail your weight loss journey?</p>
                <div className="space-y-3">
                    {options.map((opt) => (
                        <label key={opt} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 rounded-lg transition">
                            <input type="checkbox" checked={!!formData.challenges[opt]} onChange={() => toggleCheckbox('challenges', opt)} className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                            <span className="text-gray-700">{opt}</span>
                        </label>
                    ))}
                </div>
            </div>
        );
    };

    const renderStep4 = () => {
        const options = [
            { id: 'track_meals', label: 'Track Meals Daily (Calorie Counter)', icon: Utensils, color: 'text-yellow-600' },
            { id: 'activity_log', label: 'Workout/Activity Log', icon: Activity, color: 'text-green-600' },
            { id: 'weekly_weigh', label: 'Weekly Weigh-ins (Photo Proof)', icon: Scale, color: 'text-red-500' },
            { id: 'buddy', label: 'Fitness Buddy Check-ins', icon: Users, color: 'text-blue-500' },
            { id: 'coach', label: 'Virtual Health Coach', icon: Heart, color: 'text-pink-500' },
            { id: 'other', label: 'Other', icon: Square, color: 'text-gray-400' },
        ];
        return (
            <div className="space-y-4 max-w-2xl w-full mx-auto">
                 <p className="text-gray-700 mb-4 font-medium">How would you like to prove your commitment? <span className="text-gray-400 text-sm font-normal">(Choose one or more options)</span></p>
                 <div className="space-y-3">
                    {options.map((opt) => (
                        <label key={opt.id} className="flex items-center space-x-3 cursor-pointer group p-2 hover:bg-gray-50 rounded-lg transition">
                            <input type="checkbox" checked={!!formData.accountability[opt.id]} onChange={() => toggleCheckbox('accountability', opt.id)} className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 self-start" />
                            <div className="flex items-center space-x-2">
                                <opt.icon className={`w-5 h-5 ${opt.color}`} />
                                <span className="text-gray-700 group-hover:text-gray-900">{opt.label}</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>
        );
    };

    const renderStep5 = () => (
        <div className="space-y-6 max-w-2xl w-full mx-auto">
            <div>
                <label className="block text-gray-700 font-medium mb-2">How will you feel when you hit your target weight?</label>
                <select value={formData.visFeel} onChange={(e) => updateForm('visFeel', e.target.value)} className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="">Select feeling</option><option>Light</option><option>Proud</option><option>Strong</option><option>Revitalized</option><option>Free</option>
                </select>
            </div>
             <div>
                <label className="block text-gray-700 font-medium mb-2">What is the first thing you will buy or do?</label>
                <select value={formData.visAchieve} onChange={(e) => updateForm('visAchieve', e.target.value)} className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="">Select activity</option><option>Buy new clothes</option><option>Go to the beach</option><option>Start a new hobby</option><option>Take a fitness class</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Write a future message to yourself (e.g. at your goal weight)</label>
                <textarea rows="4" placeholder="Dear fitter me..." className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700 resize-none" value={formData.visMessage} onChange={(e) => updateForm('visMessage', e.target.value)} />
            </div>
        </div>
    );

    const renderStep6 = () => (
        <div className="space-y-8 max-w-2xl w-full mx-auto">
            <div className="space-y-4">
                <p className="text-gray-700">Choose a Referee - someone to help you verify your weight or activity logs!</p>
                <div className="flex flex-col gap-2">
                     <label className="text-gray-700 font-medium">Who will be your Referee:</label>
                     <select value={formData.refereeType} onChange={(e) => updateForm('refereeType', e.target.value)} className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-1/2 p-2.5">
                        <option>On your Honor</option><option>Personal Trainer</option><option>Dietician/Nutritionist</option><option>Gym Buddy</option>
                    </select>
                </div>
            </div>
            {formData.refereeType === 'On your Honor' ? (
                <p className="text-gray-600 leading-relaxed p-4 bg-blue-50 rounded-xl border border-blue-100">
                    You have picked the honor system. You promise to be honest about your weigh-ins and workout commitments.
                </p>
            ) : (
                <div className="space-y-6 animate-fade-in">
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Invite your Referee:</label>
                        <input type="email" placeholder="Email" className="w-full sm:w-3/4 p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700" value={formData.refereeEmail} onChange={(e) => updateForm('refereeEmail', e.target.value)} />
                        <p className="text-sm text-gray-500 mt-2">Enter your Referee’s <strong>email address</strong> or <strong>goalHyke username</strong>.</p>
                    </div>
                </div>
            )}
        </div>
    );

    const renderStep7 = () => (
        <div className="space-y-8 max-w-2xl w-full mx-auto">
            <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div className="space-y-1">
                    <h3 className="text-gray-900 font-medium text-lg">Auto accept</h3>
                    <p className="text-sm text-gray-500 max-w-xs">Let goalHyke fitness communities automatically become your Supporter</p>
                </div>
                <button onClick={() => updateForm('autoAccept', !formData.autoAccept)} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.autoAccept ? 'bg-blue-600' : 'bg-gray-200'}`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.autoAccept ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
            </div>
            <div className="space-y-4">
                <h3 className="text-gray-700 font-medium">Get support from the community!</h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-2">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition">
                        <div className="bg-[#3b5998] text-white p-1 rounded h-6 w-6 flex items-center justify-center font-bold">f</div>
                        <span className="text-sm text-gray-700">Share on Facebook</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 hover:bg-green-100 transition">
                        <div className="bg-[#25D366] text-white p-1 rounded-full h-6 w-6 flex items-center justify-center"><MessageCircle className="w-4 h-4 fill-current" /></div>
                        <span className="text-sm text-gray-700">Share on WhatsApp</span>
                    </button>
                </div>
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Invite Friends/Supporters:</label>
                <textarea rows="3" placeholder="Enter emails separated by a new line" className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700 resize-none" value={formData.supporters} onChange={(e) => updateForm('supporters', e.target.value)} />
                <p className="text-xs text-gray-500 mt-2">Email addresses must be entered on a separate line.</p>
            </div>
        </div>
    );

    const getStepHeader = () => {
        switch(currentStep) {
            case 1: return { icon: Scale, title: "Set Your Target" };
            case 2: return { icon: Heart, title: "Set Your Why" };
            case 3: return { icon: Clock, title: "Identify your challenges" };
            case 4: return { icon: BarChart3, title: "Choose your accountability tool" };
            case 5: return { icon: MessageSquare, title: "Visualize success" };
            case 6: return { icon: Users, title: "Referee" };
            case 7: return { icon: Share2, title: "Add friends for support" };
            default: return {};
        }
    };
    const headerInfo = getStepHeader();

    return (
        <div className="min-h-screen bg-white flex font-sans text-gray-900">
            <div className="hidden lg:block"><Sidebar /></div>
            <div className="flex-1 flex flex-col">
                <AppHeader onMenuToggle={() => setIsMobileOpen(true)} />
                <main className="p-6 md:p-10 flex-grow">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

                        {/* Top Navigation & Progress */}
                        <div className="flex items-center justify-between mb-8">
                            <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full text-gray-600 disabled:opacity-30 transition" disabled={currentStep === 1}>
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <div className="flex gap-1 sm:gap-2 overflow-x-auto">
                                {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                                    <div key={step} className={`h-1.5 w-6 sm:w-10 rounded-full transition-colors duration-300 ${step === currentStep ? 'bg-[#4a76ff]' : step < currentStep ? 'bg-blue-200' : 'bg-gray-200'}`}></div>
                                ))}
                            </div>
                            <div className="w-10"></div>
                        </div>

                        {/* Step Header */}
                        <div className="text-center mb-8 px-2">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                {headerInfo.icon && <headerInfo.icon className="w-6 h-6 text-gray-800" />}
                                <h2 className="text-lg sm:text-xl font-semibold">{headerInfo.title}</h2>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Lose Weight Goal</h1>
                            <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                                Your health journey requires commitment. Let&apos;s define your path to success.
                            </p>
                        </div>

                        {/* Content Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 mb-10 relative min-h-[400px]">
                            {currentStep === 1 && renderStep1()}
                            {currentStep === 2 && renderStep2()}
                            {currentStep === 3 && renderStep3()}
                            {currentStep === 4 && renderStep4()}
                            {currentStep === 5 && renderStep5()}
                            {currentStep === 6 && renderStep6()}
                            {currentStep === 7 && renderStep7()}

                           {/* Decorative Floating Button (Hidden on mobile to save space) */}
                            <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 translate-x-full hidden xl:block">
                                <button className="bg-[#7C3AED] text-white p-4 rounded-full shadow-lg hover:bg-[#6d31d6] transition animate-bounce-slow">
                                    <MessageCircle className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4 mb-16">
                            <button className="px-8 py-3 rounded-full border border-[#5B48CC] text-[#5B48CC] font-medium hover:bg-purple-50 transition w-full sm:w-auto">
                                Choose a new goal
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-12 py-3 rounded-full bg-[#5B48CC] text-white font-medium shadow-md hover:bg-[#4c3cb3] transition w-full sm:w-auto flex items-center justify-center gap-2"
                            >
                                {currentStep === 7 ? 'Submit' : 'Next'} {currentStep < 7 && <ChevronLeft className="w-4 h-4 rotate-180" />}
                            </button>
                        </div>
                    </div>
                </main>
                <Communities />
                <Footer />
            </div>

            {/* Modals Overlay */}
            {modalState && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
                    {/* 1. Commit Points Warning */}
                    {modalState === 'commit' && (
                        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full text-center transform transition-all scale-100">
                            <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-2">You will be charged 50, if you</h3>
                            <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-10">fail to complete the goal</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button onClick={() => setModalState('success')} className="px-8 py-3 bg-[#5B48CC] text-white rounded-full font-medium hover:bg-[#4c3cb3] transition w-full sm:w-auto">
                                    Yes, commit
                                </button>
                                <button onClick={() => setModalState(null)} className="px-8 py-3 border border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition w-full sm:w-auto">
                                    No, Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {/* 2. Low Token Warning (Mocked for consistency) */}
                    {modalState === 'token' && (
                        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full text-center">
                             <h3 className="text-xl sm:text-2xl font-normal text-gray-800 mb-10">You don’t have enough token to activate this goal</h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button className="px-8 py-3 bg-[#5B48CC] text-white rounded-full font-medium hover:bg-[#4c3cb3] transition w-full sm:w-auto">
                                    Get token
                                </button>
                                <button onClick={() => setModalState(null)} className="px-8 py-3 border border-red-400 text-red-500 rounded-full font-medium hover:bg-red-50 transition w-full sm:w-auto">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {/* 3. Success Modal */}
                    {modalState === 'success' && (
                        <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-14 max-w-lg w-full text-center relative">
                            <button onClick={() => setModalState(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                                <X className="w-6 h-6" />
                            </button>
                            <div className="mb-6 flex justify-center">
                                <CheckCircle className="w-20 h-20 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-medium text-gray-800 mb-8">Goal Activated!</h3>
                            <button
                                onClick={() => { console.log("Navigate to Dashboard"); setModalState(null); }}
                                className="px-8 py-3 bg-[#5B48CC] text-white rounded-full font-medium hover:bg-[#4c3cb3] transition w-full max-w-xs shadow-lg"
                            >
                                Track My Progress
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default LoseWeightGoalWizard;