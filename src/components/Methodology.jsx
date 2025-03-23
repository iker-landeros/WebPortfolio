import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Methodology.css';

const Methodology = () => {
    const { t } = useTranslation();

    return (
        <section id="methodology">
            <h3>{t('methodologyTitle')}</h3>

            <div className="methodology-container">

                <div className="methodology-item inspiration">
                    <p className="centerValue">{t('valueDreams')}</p>
                    <p className="leftValue">{t('valueStart')}</p>
                    <p className="rightValue">{t('valueTrust')}</p>
                    <h4>{t('valueInspiration')}</h4>
                    <p className="centerValue">{t('valueLove')}</p>
                    <p className="rightValue">{t('valuePassion')}</p>
                    <p className="leftValue">{t('valueAspiration')}</p>
                </div>

                <div className="methodology-item education">
                    <p className="centerValue">{t('valueGrowth')}</p>
                    <p className="leftValue">{t('valueFreedom')}</p>
                    <p className="rightValue">{t('valueLearn')}</p>
                    <h4>{t('valueEducation')}</h4>
                    <p className="rightValue">{t('valueOpenness')}</p>
                    <p className="leftValue">{t('valueInnovation')}</p>
                    <p className="centerValue">{t('valueCommitment')}</p>
                </div>
                
                <div className="methodology-item action">
                    <p className="centerValue">{t('valueEmpathy')}</p>
                    <p className="rightValue">{t('valueGenerosity')}</p>
                    <p className="leftValue">{t('valuePerseverance')}</p>
                    <h4>{t('valueAction')}</h4>
                    <p className="leftValue">{t('valueGratitude')}</p>
                    <p className="rightValue">{t('valueImpact')}</p>
                    <p className="centerValue">{t('valueCollaboration')}</p>
                </div>

            </div>

        </section>
    );
};

export default Methodology;