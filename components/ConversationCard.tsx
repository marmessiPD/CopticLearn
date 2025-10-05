import React, { useState, useRef, useEffect } from 'react';
import { ConversationSlide } from '../types';
import { useAppContext } from '../context/AppContext';

const SpeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const RecordIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4zm5 8a1 1 0 11-2 0v1a1 1 0 112 0v-1zm-4 0a1 1 0 11-2 0v1a1 1 0 112 0v-1zM9 15a1 1 0 011-1h0a1 1 0 011 1v.01a1 1 0 01-1 1h0a1 1 0 01-1-1V15z" clipRule="evenodd" />
        <path d="M5.5 10.5a.5.5 0 00-1 0v1a4.5 4.5 0 008.558 1.943 1 1 0 111.884.693A6.5 6.5 0 012 11.5v-1a.5.5 0 00-1 0v1a.5.5 0 001 0v-1z" />
    </svg>
);

const StopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
    </svg>
);

const PlayRecordingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

const RetryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm10 8a1 1 0 011-1v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 011.885-.666A5.002 5.002 0 0014.001 13H11a1 1 0 010-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101z" clipRule="evenodd" />
    </svg>
);


interface ConversationCardProps {
    slide: ConversationSlide;
}

const ConversationCard: React.FC<ConversationCardProps> = ({ slide }) => {
    const { t, playSound } = useAppContext();
    const [roleplayMode, setRoleplayMode] = useState(false);
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [currentRecordingLine, setCurrentRecordingLine] = useState<number | null>(null);
    const [recordedAudioUrls, setRecordedAudioUrls] = useState<Record<number, string>>({});

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const handleStartRecording = async (lineIndex: number) => {
        if (isRecording) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setRecordedAudioUrls(prev => {
                    if (prev[lineIndex]) {
                        URL.revokeObjectURL(prev[lineIndex]);
                    }
                    return { ...prev, [lineIndex]: audioUrl };
                });
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
            setCurrentRecordingLine(lineIndex);
        } catch (err) {
            console.error("Error accessing microphone:", err);
            alert(t({
                de: "Mikrofonzugriff verweigert. Bitte erlaube den Zugriff in den Browsereinstellungen.",
                en: "Microphone access denied. Please allow access in your browser settings.",
                ar: "تم رفض الوصول إلى الميكروفون. يرجى السماح بالوصول في إعدادات المتصفح."
            }));
        }
    };

    const handleStopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setCurrentRecordingLine(null);
        }
    };
    
    const playRecordedAudio = (lineIndex: number) => {
        const audioUrl = recordedAudioUrls[lineIndex];
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play();
        }
    };
    
    const handleRoleSelect = (role: string) => {
        setSelectedRole(role);
        setRecordedAudioUrls(prev => {
            Object.values(prev).forEach(URL.revokeObjectURL);
            return {};
        });
    };

    useEffect(() => {
        if (!roleplayMode) {
            setSelectedRole(null);
            setRecordedAudioUrls(prev => {
                Object.values(prev).forEach(URL.revokeObjectURL);
                return {};
            });
        }
    }, [roleplayMode]);

    useEffect(() => {
        return () => {
            Object.values(recordedAudioUrls).forEach(URL.revokeObjectURL);
        };
    }, []);


    return (
        <div className="bg-light-primary dark:bg-dark-secondary rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-coptic-blue dark:text-coptic-gold text-center mb-2">{t(slide.title)}</h2>
            <p className="text-center mb-4 text-gray-600 dark:text-gray-400">{t({ de: "Teilnehmer", en: "Participants", ar: "المشاركون" })}: {slide.participants.join(', ')}</p>

            {/* Roleplay Toggle */}
            <div className="flex items-center justify-center my-4 p-2 bg-gray-100 dark:bg-dark-primary rounded-lg">
                <label htmlFor="roleplay-toggle" className="flex items-center cursor-pointer">
                    <span className="mr-3 rtl:ml-3 rtl:mr-0 font-semibold text-light-text dark:text-dark-text">{t({de: "Rollenspiel", en: "Roleplay", ar: "لعب الأدوار"})}</span>
                    <div className="relative">
                        <input type="checkbox" id="roleplay-toggle" className="sr-only" checked={roleplayMode} onChange={() => setRoleplayMode(!roleplayMode)} />
                        <div className="block bg-gray-300 dark:bg-gray-600 w-14 h-8 rounded-full"></div>
                        <div className={`absolute top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out ${roleplayMode ? 'transform translate-x-6 bg-coptic-blue' : 'transform translate-x-1'}`}></div>
                    </div>
                </label>
            </div>
            
            {/* Role Selection */}
            {roleplayMode && (
                <div className="text-center my-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h3 className="font-semibold mb-2">{t({ de: "Wähle deine Rolle", en: "Choose your role", ar: "اختر دورك" })}</h3>
                    <div className="flex justify-center gap-4">
                        {slide.participants.map(p => (
                            <button key={p} onClick={() => handleRoleSelect(p)} className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${selectedRole === p ? 'bg-coptic-blue text-white dark:bg-coptic-gold dark:text-coptic-blue' : 'bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'}`}>{p}</button>
                        ))}
                    </div>
                </div>
            )}

            <div className="space-y-4 mt-6">
                {slide.lines.map((line, index) => {
                    const isMyTurn = roleplayMode && selectedRole === line.speaker;
                    const hasRecording = recordedAudioUrls[index] !== undefined;

                    return (
                        <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className={`max-w-[85%] p-3 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-700' : 'bg-coptic-blue/20 dark:bg-coptic-gold/20'}`}>
                                <p className="font-bold text-sm mb-1 text-coptic-blue dark:text-coptic-gold">{line.speaker}</p>
                                <p className="font-coptic text-lg">{line.coptic}</p>
                                <p className="italic text-sm text-gray-600 dark:text-gray-400">{t(line.translation)}</p>
                                
                                <div className="flex items-center gap-2 mt-2">
                                    <button onClick={() => playSound(t(line.translation))} className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10" aria-label={t({de: "Original anhören", en: "Listen to original", ar: "استمع للأصل"})}>
                                        <SpeakerIcon className="h-4 w-4" />
                                    </button>
                                    
                                    {isMyTurn && (
                                        <div className="flex items-center gap-2 border-l-2 border-gray-300 dark:border-gray-600 pl-2 ml-1">
                                            {currentRecordingLine === index ? (
                                                <button onClick={handleStopRecording} className="flex items-center text-sm font-semibold text-red-600 bg-red-100 dark:bg-red-900/50 px-2 py-1 rounded-md">
                                                    <span className="relative flex h-3 w-3 mr-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                                    </span>
                                                    Stop
                                                </button>
                                            ) : (
                                                <button onClick={() => handleStartRecording(index)} disabled={isRecording || !selectedRole} className="p-1.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10 dark:hover:bg-white/10" aria-label={t({de: "Aufnehmen", en: "Record", ar: "تسجيل"})}>
                                                    <RecordIcon className="h-5 w-5" />
                                                </button>
                                            )}
                                            
                                            {hasRecording && (
                                                <>
                                                    <button onClick={() => playRecordedAudio(index)} className="p-1.5 rounded-full hover:bg-black/10 dark:hover:bg-white/10" aria-label={t({de: "Aufnahme abspielen", en: "Play recording", ar: "تشغيل التسجيل"})}>
                                                        <PlayRecordingIcon className="h-5 w-5 text-green-600" />
                                                    </button>
                                                    <button onClick={() => handleStartRecording(index)} disabled={isRecording || !selectedRole} className="p-1.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/10 dark:hover:bg-white/10" aria-label={t({de: "Erneut aufnehmen", en: "Re-record", ar: "إعادة التسجيل"})}>
                                                        <RetryIcon className="h-4 w-4" />
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ConversationCard;