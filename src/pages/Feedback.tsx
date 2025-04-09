import { useState, FormEvent } from 'react';

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
  {
    id: 5,
    name: 'Sophia Martinez',
    company: 'StyleShop',
    position: 'Marketing Director',
    comment: 'Our e-commerce site built by Harry has been a game-changer for our fashion brand. The seamless checkout process and beautiful product displays have significantly boosted our sales.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    date: 'November 18, 2023'
  },
  {
    id: 6,
    name: 'James Thompson',
    company: 'Global Solutions',
    position: 'Product Manager',
    comment: "Harry's expertise in React and TypeScript made our complex web application development smooth and efficient. His attention to detail and problem-solving skills are outstanding.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    date: 'February 8, 2024'
  }
];

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    rating: 5,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Feedback submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
        rating: 5,
        comment: ''
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter testimonials by rating
  const filteredTestimonials = currentFilter === 'all' 
    ? testimonials 
    : testimonials.filter(item => item.rating === parseInt(currentFilter, 10));

  return (
    <div className="page-background">
      <div className="page-background-patterns">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
      </div>
      
      <div className="page-content-container space-y-xl">
        <header className="text-center space-y-8 mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-['Montserrat',sans-serif] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Client Feedback</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            See what my clients have to say about working with me and share your own experience
          </p>
        </header>

        {/* Testimonials section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold mb-6 md:mb-0 neon-text">Client Testimonials</h2>
            <div className="flex gap-2">
              <select
                className="px-4 py-3 rounded-md bg-transparent border border-[#05d9e8] text-[#05d9e8] focus:outline-none focus:ring-2 focus:ring-[#05d9e8] hover:bg-[#05d9e8]/10 transition-all"
                value={currentFilter}
                onChange={(e) => setCurrentFilter(e.target.value)}
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="hover-3d p-8 rounded-md backdrop-blur-sm"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#05d9e8] shadow-[0_0_10px_rgba(5,217,232,0.3)]">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-sm opacity-80">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-[#ff2a6d]' : 'opacity-30'}`}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="mb-6 text-lg leading-relaxed">"{testimonial.comment}"</p>
                
                <p className="text-sm opacity-60">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leave feedback form */}
        <div className="max-w-3xl mx-auto hover-3d p-10">
          <h2 className="text-3xl font-bold mb-10 neon-text text-center">Share Your Experience</h2>
          
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-100 bg-opacity-20 border border-green-500 text-green-500 rounded-md">
              Thank you for your feedback! Your testimonial has been submitted and will be reviewed soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-100 bg-opacity-20 border border-red-500 text-red-500 rounded-md">
              There was an error submitting your feedback. Please try again later.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-base font-medium mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-md border border-[#05d9e8]/50 bg-transparent focus:outline-none focus:border-[#05d9e8] focus:ring-2 focus:ring-[#05d9e8]/30 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-base font-medium mb-3">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-md border border-[#05d9e8]/50 bg-transparent focus:outline-none focus:border-[#05d9e8] focus:ring-2 focus:ring-[#05d9e8]/30 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-base font-medium mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-md border border-[#05d9e8]/50 bg-transparent focus:outline-none focus:border-[#05d9e8] focus:ring-2 focus:ring-[#05d9e8]/30 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="position" className="block text-base font-medium mb-3">
                  Position
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-md border border-[#05d9e8]/50 bg-transparent focus:outline-none focus:border-[#05d9e8] focus:ring-2 focus:ring-[#05d9e8]/30 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-base font-medium mb-3">
                Your Rating *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="text-3xl focus:outline-none"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-10 w-10 ${formData.rating >= star ? 'text-[#ff2a6d]' : 'opacity-30'} transition-colors`}
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
              <label htmlFor="comment" className="block text-base font-medium mb-3">
                Your Feedback *
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 rounded-md border border-[#05d9e8]/50 bg-transparent focus:outline-none focus:border-[#05d9e8] focus:ring-2 focus:ring-[#05d9e8]/30 transition-colors"
                placeholder="Share your experience working with me..."
              ></textarea>
            </div>
            
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 rounded-md bg-transparent border border-[#ff2a6d] text-[#ff2a6d] hover:bg-[#ff2a6d]/10 hover:shadow-[0_0_15px_rgba(255,42,109,0.6)] transition-all transform hover:scale-105 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#ff2a6d]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback; 