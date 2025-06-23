import React from 'react';

interface Step {
  title: string;
  content: React.ReactNode;
  completed?: boolean;
}

interface StepNavigatorProps {
  steps: Step[];
  currentStep?: number;
  showProgress?: boolean;
}

const StepNavigator: React.FC<StepNavigatorProps> = ({ 
  steps, 
  currentStep = 0, 
  showProgress = true 
}) => {
  return (
    <div className="step-navigator" style={{ margin: '2rem 0' }}>
      {showProgress && (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '2rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <div style={{ 
            fontSize: '0.875rem', 
            fontWeight: '600', 
            color: '#495057',
            marginRight: '1rem'
          }}>
            Progress:
          </div>
          <div style={{ 
            flex: 1, 
            height: '8px', 
            backgroundColor: '#e9ecef', 
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div 
              style={{ 
                height: '100%', 
                backgroundColor: '#28a745',
                width: `${((currentStep + 1) / steps.length) * 100}%`,
                transition: 'width 0.3s ease'
              }}
            />
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            fontWeight: '600', 
            color: '#495057',
            marginLeft: '1rem'
          }}>
            {currentStep + 1} of {steps.length}
          </div>
        </div>
      )}
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`step-item ${index === currentStep ? 'active' : ''} ${step.completed ? 'completed' : ''}`}
            style={{
              display: 'flex',
              marginBottom: index < steps.length - 1 ? '2rem' : '0',
              opacity: index <= currentStep ? 1 : 0.6
            }}
          >
            <div style={{ 
              marginRight: '1rem',
              flexShrink: 0
            }}>
              <div 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: step.completed ? '#28a745' : (index === currentStep ? '#007bff' : '#e9ecef'),
                  color: step.completed || index === currentStep ? 'white' : '#6c757d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {step.completed ? '✓' : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div 
                  style={{
                    width: '2px',
                    height: '2rem',
                    backgroundColor: index < currentStep ? '#28a745' : '#e9ecef',
                    margin: '0.5rem auto',
                    transition: 'background-color 0.3s ease'
                  }}
                />
              )}
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 
                style={{ 
                  margin: '0 0 1rem 0',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: index === currentStep ? '#007bff' : (step.completed ? '#28a745' : '#495057')
                }}
              >
                {step.title}
              </h3>
              <div style={{ 
                color: '#6c757d',
                lineHeight: '1.6'
              }}>
                {step.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepNavigator;