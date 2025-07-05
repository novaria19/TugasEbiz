// Website Configuration
const SITE_CONFIG = {
    // Basic Site Information
    siteName: 'Kaminsan IT Consultant',
    tagline: 'Solusi IT Terpercaya untuk Transformasi Digital Bisnis Anda',
    
    // Contact Information
    contact: {
        address: 'Malang, Jawa Timur, Indonesia',
        phone: '+62 XXX-XXXX-XXXX',
        email: 'info@kaminsan.com'
    },
    
    // Company Statistics
    stats: {
        clients: '50+',
        projects: '100+',
        support: '24/7',
        experience: '3+'
    },
    
    // Navigation Menu
    navigation: [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' }
    ],
    
    // Services Data
    services: [
        {
            icon: '🔧',
            title: 'IT Support & Maintenance',
            description: 'Dukungan teknis komprehensif dan pemeliharaan sistem IT untuk memastikan operasional bisnis berjalan lancar tanpa gangguan.'
        },
        {
            icon: '🛡️',
            title: 'Cybersecurity',
            description: 'Perlindungan keamanan data dan sistem informasi dengan solusi keamanan terdepan untuk melindungi aset digital perusahaan.'
        },
        {
            icon: '☁️',
            title: 'Cloud Migration & Integration',
            description: 'Migrasi data dan integrasi sistem ke cloud untuk efisiensi operasional, skalabilitas, dan aksesibilitas yang lebih baik.'
        }
    ],
    
    // About Section Content
    about: {
        paragraphs: [
            'Didirikan oleh seorang pemuda yang bosan melihat bisnis kecil kesulitan menghadapi teknologi, Kaminsan IT Consultant hadir sebagai solusi nyata di era digital. Kami percaya bahwa teknologi seharusnya memudahkan, bukan mempersulit.',
            'Bermula dari sebuah garasi di Malang, tim kami memulai perjalanan dengan satu prinsip sederhana: "Kalau bisa dibantu, kenapa dipersulit?" Dengan semangat itu, kami membantu UMKM, startup, hingga perusahaan berkembang dalam menyusun infrastruktur IT, menjaga keamanan data, dan memanfaatkan teknologi untuk efisiensi kerja.'
        ]
    },
    
    // Animation Settings
    animations: {
        fadeInDuration: 800,
        scrollThreshold: 0.1,
        scrollMargin: '0px 0px -50px 0px'
    },
    
    // Form Settings
    form: {
        successMessage: 'Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.',
        fields: {
            name: { required: true, placeholder: 'Masukkan nama lengkap' },
            email: { required: true, placeholder: 'Masukkan email' },
            company: { required: false, placeholder: 'Nama perusahaan' },
            message: { required: true, placeholder: 'Ceritakan kebutuhan IT Anda...' }
        }
    },
    
    // Theme Colors
    colors: {
        primary: '#8B4513',
        secondary: '#DC143C',
        accent: '#CD853F',
        light: '#F5E6D3',
        dark: '#2F1B14'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}