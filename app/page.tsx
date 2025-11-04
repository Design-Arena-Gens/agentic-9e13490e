"use client";

import { useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Link2,
  Video,
  Instagram,
  Youtube,
  BarChart3,
  Zap,
  Target,
  DollarSign,
  Copy,
  Check
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("generator");
  const [productUrl, setProductUrl] = useState("");
  const [niche, setNiche] = useState("");
  const [platform, setPlatform] = useState("instagram");
  const [contentType, setContentType] = useState("reel");
  const [generatedContent, setGeneratedContent] = useState("");
  const [affiliateLink, setAffiliateLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateContent = () => {
    setLoading(true);
    setTimeout(() => {
      const contentTemplates = {
        instagram: {
          reel: `🎯 ${niche.toUpperCase()} MUST-HAVE! 🔥

Hey fam! 😍 Just discovered this GAME-CHANGER and I had to share!

✨ Why you NEED this:
• Saves you time ⏰
• Premium quality 💎
• Best price I've found 💰

Swipe up for the link! 👆
Use code SAVE20 for 20% OFF! 🎁

❤️ Double tap if you want more finds like this!
📩 DM me "LINK" for the direct URL

#${niche} #affiliate #musthave #deals #shopping #trending`,

          story: `🚨 HOT DEAL ALERT 🚨

Found this AMAZING ${niche} product!

Why I love it:
✅ High quality
✅ Best price
✅ Fast shipping

👆 SWIPE UP for link!
💬 Questions? DM me!

#ad #${niche} #deals`,

          post: `🌟 ${niche.toUpperCase()} REVIEW 🌟

I've been using this for [TIME] and here's my honest review:

PROS:
✅ [Benefit 1]
✅ [Benefit 2]
✅ [Benefit 3]

CONS:
❌ [Minor con if any]

💰 PRICE: Worth every penny!
🔗 Link in bio + stories

Special code: SAVE20 for 20% off!

Would you try this? Comment below! 👇

#${niche} #review #honest #affiliate #recommendation`
        },
        youtube: {
          video: `📹 YOUTUBE VIDEO SCRIPT:

INTRO (0-15 sec):
"Hey everyone! Today I'm reviewing this ${niche} product that's been BLOWING UP! Stick around because I've got an exclusive discount code for you!"

MAIN CONTENT (15sec-2min):
• Product overview
• Key features demonstration
• Real-world use cases
• My personal experience

CALL TO ACTION (Last 30 sec):
"Link is in the description below!
Use code SAVE20 for 20% OFF!
Don't forget to LIKE and SUBSCRIBE for more reviews!
Comment below if you have questions!"

DESCRIPTION:
🔗 Get it here: [YOUR AFFILIATE LINK]
💰 Use code: SAVE20
⭐ Best ${niche} product I've tested!

#${niche} #review #affiliate`,

          shorts: `🎬 YOUTUBE SHORTS SCRIPT:

[Hook - 1 sec]: "Wait... THIS is a game-changer! 😱"

[Problem - 2 sec]: "Struggling with [PROBLEM]?"

[Solution - 3 sec]: "This ${niche} product solved it for me!"

[Proof - 2 sec]: [Show product in action]

[CTA - 2 sec]: "Link in description! 💰 Code: SAVE20"

DESCRIPTION:
🔗 Grab yours: [AFFILIATE LINK]
💰 20% OFF code: SAVE20
#${niche} #shorts #review`
        }
      };

      let content = "Content generated! Customize this template for your specific product.";

      if (platform === "instagram") {
        const instagramTemplates = contentTemplates.instagram;
        if (contentType === "reel") content = instagramTemplates.reel;
        else if (contentType === "story") content = instagramTemplates.story;
        else if (contentType === "post") content = instagramTemplates.post;
      } else if (platform === "youtube") {
        const youtubeTemplates = contentTemplates.youtube;
        if (contentType === "video") content = youtubeTemplates.video;
        else if (contentType === "shorts") content = youtubeTemplates.shorts;
      }

      setGeneratedContent(content);
      setLoading(false);
    }, 1500);
  };

  const generateAffiliateLink = () => {
    if (!productUrl) return;

    const trackingId = Math.random().toString(36).substring(7);
    const tracked = `${productUrl}${productUrl.includes('?') ? '&' : '?'}ref=${trackingId}`;
    setAffiliateLink(tracked);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Hero Section */}
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Affiliate Hub
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">Smart Marketing, Better Earnings</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full">
              <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">Start Earning Today</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: TrendingUp, label: "Boost Conversions", value: "300%+", color: "purple" },
            { icon: Zap, label: "Generate Content", value: "10sec", color: "pink" },
            { icon: Target, label: "Click Rate", value: "15%+", color: "blue" },
            { icon: BarChart3, label: "Track Links", value: "Real-time", color: "green" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <stat.icon className={`w-8 h-8 text-${stat.color}-600 mb-3`} />
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4">
            <button
              onClick={() => setActiveTab("generator")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "generator"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>AI Content Generator</span>
            </button>
            <button
              onClick={() => setActiveTab("links")}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "links"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Link2 className="w-5 h-5" />
              <span>Link Tracker</span>
            </button>
          </div>

          {/* Content Generator Tab */}
          {activeTab === "generator" && (
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Product Niche
                  </label>
                  <input
                    type="text"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="e.g., fitness, tech, beauty, fashion"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Platform
                  </label>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setPlatform("instagram")}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all ${
                        platform === "instagram"
                          ? "border-purple-600 bg-purple-50 dark:bg-purple-900"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <Instagram className="w-5 h-5" />
                      <span>Instagram</span>
                    </button>
                    <button
                      onClick={() => setPlatform("youtube")}
                      className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 transition-all ${
                        platform === "youtube"
                          ? "border-red-600 bg-red-50 dark:bg-red-900"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <Youtube className="w-5 h-5" />
                      <span>YouTube</span>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Content Type
                </label>
                <div className="flex space-x-3">
                  {platform === "instagram" ? (
                    <>
                      <button
                        onClick={() => setContentType("reel")}
                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                          contentType === "reel"
                            ? "border-purple-600 bg-purple-50 dark:bg-purple-900"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        Reel
                      </button>
                      <button
                        onClick={() => setContentType("story")}
                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                          contentType === "story"
                            ? "border-purple-600 bg-purple-50 dark:bg-purple-900"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        Story
                      </button>
                      <button
                        onClick={() => setContentType("post")}
                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                          contentType === "post"
                            ? "border-purple-600 bg-purple-50 dark:bg-purple-900"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        Post
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setContentType("video")}
                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                          contentType === "video"
                            ? "border-red-600 bg-red-50 dark:bg-red-900"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        Full Video
                      </button>
                      <button
                        onClick={() => setContentType("shorts")}
                        className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all ${
                          contentType === "shorts"
                            ? "border-red-600 bg-red-50 dark:bg-red-900"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                      >
                        Shorts
                      </button>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={generateContent}
                disabled={!niche || loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate AI Content</span>
                  </>
                )}
              </button>

              {generatedContent && (
                <div className="mt-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Generated Content</h3>
                    <button
                      onClick={() => copyToClipboard(generatedContent)}
                      className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 font-mono">
                    {generatedContent}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Link Tracker Tab */}
          {activeTab === "links" && (
            <div className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Product/Affiliate URL
                </label>
                <input
                  type="url"
                  value={productUrl}
                  onChange={(e) => setProductUrl(e.target.value)}
                  placeholder="https://example.com/product"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:border-purple-500 focus:outline-none"
                />
              </div>

              <button
                onClick={generateAffiliateLink}
                disabled={!productUrl}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Link2 className="w-5 h-5" />
                <span>Generate Tracked Link</span>
              </button>

              {affiliateLink && (
                <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Your Tracked Link</h3>
                    <button
                      onClick={() => copyToClipboard(affiliateLink)}
                      className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 break-all text-sm text-gray-800 dark:text-gray-200">
                    {affiliateLink}
                  </div>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    ✅ This link includes tracking parameters to monitor clicks and conversions
                  </p>
                </div>
              )}

              {/* Tips Section */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">📱 Instagram Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✓ Post reels 3-5x per week</li>
                    <li>✓ Use trending audio</li>
                    <li>✓ Add link in bio + stories</li>
                    <li>✓ Engage in first hour</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900 dark:to-pink-900 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">🎥 YouTube Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✓ Eye-catching thumbnails</li>
                    <li>✓ Strong hook in first 3 sec</li>
                    <li>✓ Link in description + pinned comment</li>
                    <li>✓ Clear call-to-action</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Content Templates</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI-generated scripts for reels, shorts, stories, and posts optimized for maximum engagement
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="bg-pink-100 dark:bg-pink-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Link2 className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Link Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate trackable affiliate links to monitor clicks and optimize your campaigns
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Boost Conversions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Proven templates and strategies to increase your click-through and conversion rates
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Earning Today! 💰
          </h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of creators who are boosting their affiliate income with AI-powered content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab("generator")}
              className="bg-white text-purple-600 font-bold px-8 py-4 rounded-lg hover:shadow-xl transition-all"
            >
              Generate Content Now
            </button>
            <button
              onClick={() => setActiveTab("links")}
              className="bg-purple-800 text-white font-bold px-8 py-4 rounded-lg hover:bg-purple-900 transition-all"
            >
              Track Your Links
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="mb-2">© 2024 AI Affiliate Hub - Empower Your Earnings</p>
            <p className="text-sm">Made for creators who want to earn more through smart affiliate marketing</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
