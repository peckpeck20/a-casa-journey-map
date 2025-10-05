import React, { useState } from 'react';
import { Search, Heart, Clock, TrendingUp, Star, MapPin, Smartphone, Calendar, Users, DollarSign, MessageCircle, Award, Target, Frown, Sparkles, Phone, Facebook, Instagram } from 'lucide-react';

const JourneyMap = () => {
  const [selectedPersona, setSelectedPersona] = useState(null);

  const personas = [
    {
      id: 'lukas',
      name: 'Lukas Steiner',
      nickname: 'The Hungry Student',
      age: 23,
      gender: 'Male',
      lifeStage: 'University Student',
      location: 'Innsbruck, Austria',
      occupation: 'Business & IT Student at FH Innsbruck',
      avatar: '👨‍🎓',
      image: '/lukas.png',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-300',
      traits: ['Tech-savvy', 'Impatient with inefficiency', 'Socially active', 'Price-conscious but values quality'],
      goals: ['Find a quick, affordable meal between classes', 'Order easily via mobile without delays', 'Access real-time delivery or pickup times'],
      motivations: ['Quality ingredients at a fair price', 'Speed and convenience', 'Digital wallet payments'],
      frustrations: ['Broken website and app', 'Long wait times during rush hours', 'No student discount or loyalty system'],
      channels: [
        { name: 'Google Maps', icon: MapPin },
        { name: 'Instagram', icon: Instagram },
        { name: 'TikTok', icon: Smartphone },
        { name: 'Foodora', icon: Smartphone }
      ],
      stages: [
        {
          emoji: '🔍',
          title: 'Pre-Visit',
          subtitle: 'Awareness',
          icon: Search,
          actions: ['Searches "pizza near me" on Google Maps or TikTok', 'Checks Google ratings (4.3–4.5) & Instagram photos', 'Clicks official site or app but finds broken links', 'Ends up using Foodora to see menu & prices'],
          touchpoints: ['Google Reviews', 'Instagram', 'TikTok', 'Website', 'Foodora'],
          emotions: ['Curious', 'Hungry', 'Frustrated'],
          emotionFlow: 'Curious → Hungry → Frustrated',
          opportunities: 'Rebuild website with full menu and online ordering; optimize Google presence for search & mobile speed'
        },
        {
          emoji: '🍕',
          title: 'Visit',
          subtitle: 'Service Encounter',
          icon: Clock,
          actions: ['Walks in or picks up takeaway', 'Orders fast, expects quick prep & friendly tone', 'Uses Google Pay at counter'],
          touchpoints: ['Counter staff', 'Menu board', 'Payment terminal', 'Takeaway packaging'],
          emotions: ['Hungry', 'Impatient', 'Relieved'],
          emotionFlow: 'Hungry → Impatient → Relieved',
          opportunities: 'Create express pickup counter; add digital queue or ETA board; maintain consistency across peak hours'
        },
        {
          emoji: '📱',
          title: 'Post-Visit',
          subtitle: 'Reflection',
          icon: MessageCircle,
          actions: ['Posts pizza photo on Instagram', 'Leaves Google review if impressed', 'Returns weekly if quality consistent'],
          touchpoints: ['Social media', 'Google Review', 'Email follow-up'],
          emotions: ['Content', 'Loyal'],
          emotionFlow: 'Content → Loyal (if positive)',
          opportunities: 'Encourage photo-sharing hashtag; launch student loyalty card or referral program'
        }
      ]
    },
    {
      id: 'anna',
      name: 'Anna & Max Leitner',
      nickname: 'The Date Night Couple',
      age: 27,
      gender: 'Female & Male',
      lifeStage: 'Young Professionals, No Kids',
      location: 'Innsbruck, Austria',
      occupation: 'Graphic Designer (Anna) & Architect (Max)',
      avatar: '👩‍❤️‍👨',
      image: '/anna-max.png',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-300',
      traits: ['Romantic', 'Experience-oriented', 'Detail-conscious', 'Influenced by aesthetics'],
      goals: ['Enjoy a relaxed dine-in experience', 'Book a specific table online for special occasions', 'Experience attentive service and personal touch'],
      motivations: ['High service quality and presentation', 'Atmosphere and ambience', 'Special date-night experiences'],
      frustrations: ['No working online booking system', 'No visible wine list or menu online', 'Lack of personalized experience'],
      channels: [
        { name: 'Instagram', icon: Instagram },
        { name: 'Google Reviews', icon: Star },
        { name: 'Restaurant Website', icon: Smartphone }
      ],
      stages: [
        {
          emoji: '💝',
          title: 'Pre-Visit',
          subtitle: 'Awareness',
          icon: Calendar,
          actions: ['Plans date night (Friday/Saturday)', 'Browses website to view photos & ambience', 'Tries to reserve specific table online; finds form non-functional', 'Reads reviews to confirm service quality'],
          touchpoints: ['Website', 'Online booking form', 'Instagram Stories', 'Google Reviews'],
          emotions: ['Excited', 'Hopeful', 'Disappointed'],
          emotionFlow: 'Excited → Hopeful → Disappointed',
          opportunities: 'Add table-map reservation tool; use romantic visuals & testimonials; ensure smooth mobile UX'
        },
        {
          emoji: '🕯️',
          title: 'Visit',
          subtitle: 'Service Encounter',
          icon: Heart,
          actions: ['Arrives at reserved table (if successful) or waits for a free one', 'Orders pizza & wine; enjoys lighting, music, & service', 'Waits for food; engages with waiter'],
          touchpoints: ['Host', 'Waiter', 'Table setup', 'Music', 'Lighting', 'Payment'],
          emotions: ['Anticipation', 'Relaxed', 'Happy', 'Appreciated'],
          emotionFlow: 'Anticipation → Relaxed → Happy → Appreciated',
          opportunities: 'Train staff in "service theatre" (Pine & Gilmore, 2011); add small romantic gestures like a candle or complimentary dessert'
        },
        {
          emoji: '🌟',
          title: 'Post-Visit',
          subtitle: 'Reflection',
          icon: Award,
          actions: ['Shares date-night photo on Instagram Stories', 'Leaves a positive review if service impressed', 'Considers the restaurant for anniversaries or special events'],
          touchpoints: ['Email newsletter', 'Loyalty booking reminder', 'Social media posts'],
          emotions: ['Loved', 'Grateful', 'Loyal', 'Advocating'],
          emotionFlow: 'Loved → Grateful → Loyal → Advocating',
          opportunities: 'Send "Thank you for dining" emails; invite to themed events (Valentine\'s night, wine tastings)'
        }
      ]
    },
    {
      id: 'karin',
      name: 'Karin Huber',
      nickname: 'The Value-Seeking Parent',
      age: 37,
      gender: 'Female',
      lifeStage: 'Parent with two children',
      location: 'Innsbruck, Austria',
      occupation: 'Primary School Teacher',
      avatar: '👩‍👧‍👦',
      image: '/karin.png',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-300',
      traits: ['Practical', 'Budget-conscious', 'Family-focused', 'Seeks reliability'],
      goals: ['Find affordable meals that please the whole family', 'Order takeaway quickly without errors or delays', 'Plan ahead with full menu and prices visible'],
      motivations: ['Transparency in pricing', 'Speed and convenience for pickup', 'Reliability and consistency of service'],
      frustrations: ['Incomplete online menu and unclear pricing', 'No ETA confirmation for pickup orders', 'Limited family-friendly promotions'],
      channels: [
        { name: 'Google Maps', icon: MapPin },
        { name: 'Facebook', icon: Facebook },
        { name: 'Phone', icon: Phone }
      ],
      stages: [
        {
          emoji: '🔎',
          title: 'Pre-Visit',
          subtitle: 'Awareness',
          icon: DollarSign,
          actions: ['Searches "family pizza deals Innsbruck"', 'Checks Facebook page & Google for prices, menu, and hours', 'Calls to confirm availability; relies on Foodora for online orders'],
          touchpoints: ['Website', 'Facebook', 'Phone', 'Google Maps', 'Foodora'],
          emotions: ['Practical', 'Cautious', 'Price-sensitive'],
          emotionFlow: 'Practical → Cautious → Price-sensitive',
          opportunities: 'Offer "Family Combo Deals" & clear online menu; simplify pickup ordering flow via SMS confirmation'
        },
        {
          emoji: '🚗',
          title: 'Visit',
          subtitle: 'Service Encounter',
          icon: MapPin,
          actions: ['Drives to location for pickup', 'Calls to check if order is ready', 'Pays quickly and leaves', 'Sometimes waits longer than estimated'],
          touchpoints: ['Phone', 'Counter staff', 'Parking space', 'POS system'],
          emotions: ['Rushed', 'Irritated', 'Relieved'],
          emotionFlow: 'Rushed → Irritated → Relieved',
          opportunities: 'Implement live order tracking or SMS ETA; assign quick family pickup zones; provide free kids\' drink while waiting'
        },
        {
          emoji: '🎁',
          title: 'Post-Visit',
          subtitle: 'Reflection',
          icon: TrendingUp,
          actions: ['Checks receipt and order accuracy', 'Shares value feedback with family or on Facebook', 'Orders again next week if satisfied'],
          touchpoints: ['SMS feedback link', 'Loyalty coupon', 'Facebook updates'],
          emotions: ['Evaluating', 'Relieved', 'Loyal'],
          emotionFlow: 'Evaluating → Relieved → Loyal (if consistent)',
          opportunities: 'Provide loyalty app or predictive reorder ("same as last week?"); send automated thank-you with next-order discount'
        }
      ]
    }
  ];

  const selectedPersonaData = personas.find(p => p.id === selectedPersona);

  const getEmotionColor = (emotions) => {
    if (emotions.includes('Frustrated') || emotions.includes('Disappointed') || emotions.includes('Irritated')) {
      return 'text-red-500';
    }
    if (emotions.includes('Happy') || emotions.includes('Loved') || emotions.includes('Loyal')) {
      return 'text-green-500';
    }
    return 'text-amber-500';
  };

  // Initial persona selection view
  if (!selectedPersona) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {/* Hero Header */}
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-bounce">🍕</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Pizzeria A CASA</h1>
            <p className="text-2xl text-gray-600 mb-2">Customer Experience Analysis</p>
            <p className="text-lg text-gray-500">Select a persona to explore their journey</p>
          </div>

          {/* Persona Selection Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personas.map(persona => (
              <button
                key={persona.id}
                onClick={() => setSelectedPersona(persona.id)}
                className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative text-white text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-lg transform group-hover:scale-110 transition-transform">
                    <img src={persona.image} alt={persona.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{persona.name}</h3>
                  <p className="text-lg opacity-90 mb-3">"{persona.nickname}"</p>
                  <div className="space-y-2 mb-4">
                    <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {persona.lifeStage}
                    </div>
                  </div>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold">
                      View Journey <span>→</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🍕</div>
            <h1 className="text-4xl font-bold mb-2">Pizzeria A CASA</h1>
            <p className="text-xl opacity-90">Customer Experience Analysis</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Persona Profile Section */}
        <div className="mb-12">
          <div className={`bg-gradient-to-br ${selectedPersonaData.color} rounded-3xl shadow-2xl overflow-hidden`}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-xl flex-shrink-0">
                  <img src={selectedPersonaData.image} alt={selectedPersonaData.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-bold mb-2">{selectedPersonaData.name}</h2>
                  <p className="text-2xl opacity-90 mb-3">"{selectedPersonaData.nickname}"</p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">👤 {selectedPersonaData.age} years old</span>
                    <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">📍 {selectedPersonaData.location}</span>
                    <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">💼 {selectedPersonaData.occupation}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Personality Traits */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className={`text-${selectedPersona === 'lukas' ? 'blue' : selectedPersona === 'anna' ? 'rose' : 'purple'}-500`} size={24} />
                    <h3 className="text-xl font-bold text-gray-800">Personality Traits</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedPersonaData.traits.map((trait, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedPersonaData.color}`}></div>
                        <span className="text-gray-700">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="text-green-500" size={24} />
                    <h3 className="text-xl font-bold text-gray-800">Goals</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedPersonaData.goals.map((goal, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-700">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Motivations */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="text-rose-500" size={24} />
                    <h3 className="text-xl font-bold text-gray-800">Motivations</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedPersonaData.motivations.map((motivation, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-rose-500 mt-1">♥</span>
                        <span className="text-gray-700">{motivation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frustrations */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Frown className="text-red-500" size={24} />
                    <h3 className="text-xl font-bold text-gray-800">Frustrations</h3>
                  </div>
                  <div className="space-y-2">
                    {selectedPersonaData.frustrations.map((frustration, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span className="text-gray-700">{frustration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preferred Channels */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Smartphone className="text-orange-500" size={24} />
                  <h3 className="text-xl font-bold text-gray-800">Preferred Channels</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {selectedPersonaData.channels.map((channel, idx) => {
                    const Icon = channel.icon;
                    return (
                      <div key={idx} className={`flex items-center gap-2 bg-gradient-to-r ${selectedPersonaData.color} text-white px-4 py-2 rounded-full shadow-md`}>
                        <Icon size={16} />
                        <span className="text-sm font-medium">{channel.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Map Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Journey Map</h2>
            <p className="text-gray-600">Explore {selectedPersonaData.name}'s experience across all touchpoints</p>
          </div>

          {/* Journey Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-orange-400 to-red-400 mx-32"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {selectedPersonaData.stages.map((stage, idx) => {
                return (
                  <div key={idx} className="relative">
                    {/* Stage Number Circle */}
                    <div className="flex justify-center mb-4">
                      <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${selectedPersonaData.color} shadow-lg flex items-center justify-center`}>
                        <span className="text-3xl">{stage.emoji}</span>
                      </div>
                    </div>

                    {/* Stage Card */}
                    <div className={`bg-white rounded-2xl shadow-xl p-6 ${selectedPersonaData.borderColor} border-2 hover:shadow-2xl transition-all`}>
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{stage.title}</h3>
                        <p className="text-sm text-gray-500 uppercase tracking-wide">{stage.subtitle}</p>
                      </div>

                      {/* Actions */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Users size={18} className="text-orange-500" />
                          <h4 className="font-bold text-gray-700 text-sm">Actions</h4>
                        </div>
                        <ul className="space-y-2">
                          {stage.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-orange-400 mt-1">▸</span>
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Touchpoints */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Smartphone size={18} className="text-blue-500" />
                          <h4 className="font-bold text-gray-700 text-sm">Touchpoints</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {stage.touchpoints.map((tp, i) => (
                            <span key={i} className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
                              {tp}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Emotions */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Heart size={18} className="text-rose-500" />
                          <h4 className="font-bold text-gray-700 text-sm">Emotional Journey</h4>
                        </div>
                        <div className={`text-center py-3 px-4 rounded-lg bg-gradient-to-r ${selectedPersonaData.bgColor} ${selectedPersonaData.borderColor} border`}>
                          <p className={`font-bold text-sm ${getEmotionColor(stage.emotions)}`}>
                            {stage.emotionFlow}
                          </p>
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div className={`bg-gradient-to-br ${selectedPersonaData.bgColor} rounded-xl p-4 border-2 ${selectedPersonaData.borderColor} border-dashed`}>
                        <div className="flex items-start gap-2">
                          <TrendingUp size={18} className="text-green-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-800 text-xs mb-1">Opportunities</h4>
                            <p className="text-xs text-gray-700 leading-relaxed">{stage.opportunities}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Insights Footer */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl">💡</div>
            <h3 className="text-2xl font-bold">Key Insights for {selectedPersonaData.name}</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {selectedPersona === 'lukas' && "Digital-first experience is critical. Broken websites and slow ordering processes create immediate friction. Speed, transparency, and mobile-friendly interfaces are non-negotiable."}
            {selectedPersona === 'anna' && "Romance requires attention to detail. Non-functional booking systems and lack of ambiance information destroy the pre-visit excitement. Personal touches and smooth service create memorable experiences."}
            {selectedPersona === 'karin' && "Value and reliability drive repeat business. Unclear pricing, uncertain pickup times, and missing family-friendly features increase stress. Transparency and convenience build long-term loyalty."}
          </p>
        </div>

        {/* Return to Personas Button */}
        <div className="text-center">
          <button
            onClick={() => setSelectedPersona(null)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <span>←</span>
            <span>Explore Another Persona</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;