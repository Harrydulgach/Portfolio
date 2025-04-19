import { useState, FormEvent } from 'react';
import Background3D from '../components/Background3D';

// Sample testimonial data with real images
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    position: 'CEO',
    comment: 'Harry completely transformed our company website. The 3D animations and responsive design have significantly increased our user engagement and conversion rates. Highly recommend!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    date: 'January 15, 2023'
  },
  {
    id: 2,
    name: 'Michael Chen',
    company: 'DigitalCraft',
    position: 'CTO',
    comment: 'Working with Harry was a pleasure. He delivered our e-commerce platform on time and with all the features we requested. The website is fast, secure, and looks fantastic.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    date: 'March 22, 2023'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'CreativeMinds Agency',
    position: 'Art Director',
    comment: 'Harry has an amazing eye for design combined with superb technical skills. He brought our vision to life with stunning animations and intuitive UX. The project exceeded our expectations!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    date: 'June 10, 2023'
  },
  {
    id: 4,
    name: 'David Wilson',
    company: 'Wilson Consulting',
    position: 'Founder',
    comment: 'The AI chat application Harry built for our consulting firm has revolutionized how we interact with clients. The interface is beautiful and the functionality is exactly what we needed.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    date: 'September 5, 2023'
  },
 
];

const Feedback = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: ''
  });

  const filteredTestimonials = currentFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.rating === parseInt(currentFilter));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('success');
    setFormData({ name: '', email: '', rating: 5, comment: '' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
      {/* 3D Background */}
      <Background3D />
      
      {/* Minimal background gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"></div>
        <div className="absolute top-0 left-0 right-0 h-[50vh] opacity-20 bg-gradient-to-r from-indigo-200 via-transparent to-rose-200 dark:from-indigo-950 dark:to-rose-950 blur-3xl"></div>
      </div>
      
      {/* Grain texture overlay for authenticity */}
      <div className="absolute inset-0 z-[1] bg-noise opacity-[0.02] dark:opacity-[0.04]"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-5xl py-12 md:py-16 relative z-10">
        <div className="space-y-12">
          <header className="mb-12">
            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest font-medium text-indigo-600 dark:text-indigo-400">Testimonials</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">Feedback</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl">
              See what my clients have to say about working with me and share your own experience
            </p>
          </header>

          {/* Testimonials section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-8">Client Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="group p-6 bg-white dark:bg-neutral-950 rounded-2xl hover:shadow-lg transition-all border border-neutral-200 dark:border-neutral-800 relative overflow-hidden"
                >
                  {/* Shining effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-all duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{testimonial.name}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                          {testimonial.position} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-indigo-600 dark:text-indigo-400' : 'text-neutral-300 dark:text-neutral-700'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">{testimonial.comment}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">{testimonial.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leave feedback form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800 p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800">
                  Thank you for your feedback! Your testimonial has been submitted and will be reviewed soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800">
                  There was an error submitting your feedback. Please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData({...formData, rating})}
                        className={`p-2 rounded-lg transition-colors ${
                          formData.rating >= rating
                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                            : 'text-neutral-400 dark:text-neutral-600 bg-neutral-50 dark:bg-neutral-800'
                        }`}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Your Feedback
                  </label>
                  <textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors font-medium"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback; 