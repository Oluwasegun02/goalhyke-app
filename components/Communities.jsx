import React from 'react';
import { Users } from 'lucide-react';

// Custom Link to replace next/link
const CustomLink = ({ href, children }) => (
    <a href={href} className="hover:underline block mb-2 text-sm font-medium text-blue-50 opacity-90 hover:opacity-100 transition-opacity">
        {children}
    </a>
);

const Communities = () => {
    return (
        <section className="w-full py-16" style={{ backgroundColor: '#4a76ff' }}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between">
                
                {/* Left: Icon and Title */}
                <div className="flex flex-col items-center md:items-center mb-10 md:mb-0 md:w-1/4">
                    <div className="bg-white/20 p-4 rounded-full mb-3 backdrop-blur-sm">
                        <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-white text-xl font-semibold">Communities</h3>
                </div>

                {/* Right: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 md:w-3/4 text-center md:text-left">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col space-y-1">
                        <CustomLink href="/grow-wealth">Grow wealth</CustomLink>
                        <CustomLink href="/exercise">Exercise regularly</CustomLink>
                        <CustomLink href="/tech-skill">Master tech skill</CustomLink>
                        <CustomLink href="/loss-weight">Loss weight</CustomLink>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col space-y-1">
                        <CustomLink href="/spirit">Strengthen your spirit</CustomLink>
                        <CustomLink href="/career">Level up your career</CustomLink>
                        <CustomLink href="/academics">Excel academically</CustomLink>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col space-y-1">
                        <CustomLink href="/read-more">Read more</CustomLink>
                        <CustomLink href="/stay-healthy">Stay healthy</CustomLink>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Communities;