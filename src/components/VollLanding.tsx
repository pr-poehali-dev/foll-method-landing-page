import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const VollLanding = () => {
  const [activeTab, setActiveTab] = useState('method');

  const methodFeatures = [
    { icon: 'Zap', title: 'Электропунктурная диагностика', description: 'Неинвазивное измерение электрических показателей в биологически активных точках' },
    { icon: 'Activity', title: 'Функциональная диагностика', description: 'Оценка функционального состояния органов и систем организма' },
    { icon: 'Brain', title: 'Комплексный анализ', description: 'Интегральная оценка состояния здоровья и энергетического баланса' }
  ];

  const diagnosticSteps = [
    { step: '01', title: 'Подготовка пациента', description: 'Размещение электродов на биологически активных точках' },
    { step: '02', title: 'Измерение показателей', description: 'Регистрация электрических параметров с высокой точностью' },
    { step: '03', title: 'Анализ данных', description: 'Компьютерная обработка и интерпретация результатов' },
    { step: '04', title: 'Заключение', description: 'Формирование детального отчета о состоянии здоровья' }
  ];

  const advantages = [
    { icon: 'Shield', title: 'Безопасность', value: '100%', description: 'Неинвазивная методика без побочных эффектов' },
    { icon: 'Clock', title: 'Скорость', value: '15 мин', description: 'Быстрая диагностика за одну процедуру' },
    { icon: 'Target', title: 'Точность', value: '95%', description: 'Высокая точность функциональной диагностики' },
    { icon: 'Cpu', title: 'Технологии', value: 'ИИ', description: 'Современные алгоритмы анализа данных' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-blue-600" size={28} />
              <span className="text-xl font-bold text-slate-800">Dr. Voll Method</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'method', label: 'Методика' },
                { id: 'diagnostic', label: 'Диагностика' },
                { id: 'advantages', label: 'Преимущества' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Инновационная медицинская технология
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Методика доктора <span className="text-blue-600">Фолля</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Революционная электропунктурная диагностика для комплексной оценки 
              функционального состояния организма на основе научных принципов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Узнать больше
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
            {[
              { value: '40+', label: 'Лет опыта' },
              { value: '10K+', label: 'Пациентов' },
              { value: '95%', label: 'Точность' },
              { value: '24/7', label: 'Поддержка' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Научная методика</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Основанная на принципах традиционной китайской медицины и современных технологиях
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodFeatures.map((feature, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} className="text-blue-600" size={32} />
                  </div>
                  <CardTitle className="text-slate-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scientific Diagram */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Схема электропунктурной диагностики</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Биологически активные точки</h4>
                    <p className="text-slate-600">Точки акупунктуры на коже пациента</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Электроды измерения</h4>
                    <p className="text-slate-600">Высокочувствительные датчики</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Анализ сигналов</h4>
                    <p className="text-slate-600">Компьютерная обработка данных</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <img 
                  src="/img/80b1e7a1-34c9-491e-b604-1c4121470d94.jpg" 
                  alt="Схема электропунктурной диагностики"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section id="diagnostic" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Процесс диагностики</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Четкий алгоритм проведения электропунктурного обследования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-slate-200 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
                    <CardTitle className="text-lg text-slate-800">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-slate-600">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                {index < diagnosticSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" className="text-blue-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Преимущества методики</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Научно обоснованные преимущества электропунктурной диагностики
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} className="text-blue-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{advantage.value}</div>
                  <CardTitle className="text-slate-800">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Получите консультацию специалиста по электропунктурной диагностике 
                и запишитесь на обследование
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" className="text-blue-400" size={24} />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" className="text-blue-400" size={24} />
                  <span className="text-lg">info@voll-method.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" className="text-blue-400" size={24} />
                  <span className="text-lg">Москва, ул. Медицинская, 123</span>
                </div>
              </div>
            </div>

            <Card className="bg-white text-slate-800">
              <CardHeader>
                <CardTitle>Записаться на диагностику</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 text-slate-300">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Dr. Voll Method. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default VollLanding;