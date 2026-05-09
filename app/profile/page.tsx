"use client"

import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main className="bg-black text-white px-6 py-16 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl mb-6"
          >
            
          <img
          src="/david.jpg"
          alt="David Uchechukwu"
          className="w-full h-full object-cover"
         />

          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            David Uchechukwu
          </h1>

          <p className="text-yellow-400 text-lg md:text-xl font-medium mb-6">
            Kingdom Leader • Teacher of the Word • Mentor • Revival Voice
          </p>

          <p className="max-w-3xl mx-auto text-gray-300 leading-8 text-base md:text-lg">
            Pastor David Uchechukwu is a passionate servant of God committed to
            spreading the Gospel of Jesus Christ, transforming lives through the
            power of the Word, and raising a generation rooted in faith,
            purpose, and spiritual excellence.
          </p>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-5 text-yellow-400">
              About The Ministry
            </h2>

            <p className="text-gray-300 leading-8 mb-4">
              Through impactful teachings, conferences, outreach programs, and
              mentorship initiatives, Pastor David continues to inspire people
              to deepen their relationship with God and walk boldly in purpose.
            </p>

            <p className="text-gray-300 leading-8">
              His messages focus on faith, holiness, wisdom, leadership,
              revival, and practical kingdom living.
            </p>
          </div>

          <div className="bg-yellow-500 text-black rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-5">Core Mission</h2>

            <ul className="space-y-4 text-base md:text-lg font-medium">
              <li>• Raising spiritually grounded believers</li>
              <li>• Preaching the Gospel with power and clarity</li>
              <li>• Mentoring the next generation of leaders</li>
              <li>• Building communities rooted in truth and love</li>
              <li>• Advancing kingdom impact globally</li>
            </ul>
          </div>
        </motion.section>

        {/* Scripture */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-3xl p-10 mb-20 text-center shadow-2xl"
        >
          <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
            “Go into all the world and preach the gospel to all creation.”
          </p>

          <span className="font-semibold text-lg">— Mark 16:15</span>
        </motion.section>

        {/* Ministry Focus */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Ministry Focus Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Revival Meetings',
                desc: 'Powerful gatherings focused on prayer, worship, and spiritual awakening.',
              },
              {
                title: 'Leadership Mentorship',
                desc: 'Equipping leaders for kingdom influence and impact.',
              },
              {
                title: 'Faith Teachings',
                desc: 'Biblical teachings that strengthen believers spiritually and practically.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-7">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center border-t border-white/10 pt-6"

        >
          <h2 className="text-3xl font-bold mb-4">Connect & Fellowship</h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-8">
            Stay connected for messages, conferences, prayer meetings, and
            ministry updates.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://wa.me/2349131232121"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
            >
              WhatsApp Contact
            </a>

            <a
              href="https://www.facebook.com/share/18SLHEMRxc/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all"
            >
              Facebook Page
            </a>
          </div>

          <div className="space-y-2 text-gray-300">
            <p className="text-lg font-medium">
              Contact Number: +234 913 123 2121
            </p>

            <p>
              Available for ministry invitations, conferences, mentorship, and
              fellowship gatherings.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
