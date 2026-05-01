export const weeklyPlan = {
  1: {
    day: 'Monday',
    title: 'Shoulders + Legs',
    isRest: false,
    workouts: [
      {
        group: 'Shoulders',
        exercises: [
          { id: 'm-s-1', name: 'Dumbbell Shoulder Press', sets: 3, reps: '10', description: 'Sit on a bench with back support. Press dumbbells overhead until arms are fully extended.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
          { id: 'm-s-2', name: 'Lateral Raises', sets: 3, reps: '12', description: 'Stand with dumbbells at your sides. Raise them outward until arms are parallel to the floor.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' },
          { id: 'm-s-3', name: 'Front Raises', sets: 3, reps: '12', description: 'Hold dumbbells in front of thighs. Raise them straight forward to shoulder height.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' },
          { id: 'm-s-4', name: 'Arnold Press', sets: 3, reps: '10', description: 'Start with dumbbells in front of shoulders, palms facing you. Press up while rotating palms outward.', image: 'https://images.unsplash.com/photo-1532029837206-abbe267f50f2?q=80&w=400&auto=format&fit=crop' }
        ]
      },
      {
        group: 'Legs',
        exercises: [
          { id: 'm-l-1', name: 'Squats', sets: 4, reps: '8', description: 'Stand with feet shoulder-width apart. Lower your hips back and down, keeping your back straight.', image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop' },
          { id: 'm-l-2', name: 'Leg Press', sets: 3, reps: '10', description: 'Sit on the leg press machine. Push the platform away using your legs, then slowly lower it.', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop' },
          { id: 'm-l-3', name: 'Lunges', sets: 3, reps: '12', description: 'Step forward with one leg and lower your hips until both knees are bent at a 90-degree angle.', image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=400&auto=format&fit=crop' },
          { id: 'm-l-4', name: 'Leg Curl', sets: 3, reps: '12', description: 'Lie face down on the leg curl machine. Curl your legs upwards against the resistance.', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop' }
        ]
      }
    ]
  },
  2: {
    day: 'Tuesday',
    title: 'Triceps + Wings (Back)',
    isRest: false,
    workouts: [
      {
        group: 'Triceps',
        exercises: [
          { id: 't-t-1', name: 'Tricep Pushdown', sets: 3, reps: '12', description: 'Attach a rope to a cable machine. Push down extending your arms fully, then return slowly.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
          { id: 't-t-2', name: 'Skull Crushers', sets: 3, reps: '10', description: 'Lie on a bench holding an EZ bar. Lower the bar to your forehead, then extend arms back up.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' },
          { id: 't-t-3', name: 'Dips', sets: 3, reps: '10', description: 'Support your body on dip bars. Lower yourself until your shoulders are below your elbows, then push up.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' },
          { id: 't-t-4', name: 'Overhead Extension', sets: 3, reps: '12', description: 'Hold a dumbbell overhead with both hands. Lower it behind your head, then extend arms fully.', image: 'https://images.unsplash.com/photo-1532029837206-abbe267f50f2?q=80&w=400&auto=format&fit=crop' }
        ]
      },
      {
        group: 'Wings (Back)',
        exercises: [
          { id: 't-b-1', name: 'Lat Pulldown', sets: 3, reps: '10', description: 'Sit at the lat pulldown machine. Pull the wide bar down to your upper chest, squeezing your back.', image: 'https://images.unsplash.com/photo-1603287681836-b174ce5074c2?q=80&w=400&auto=format&fit=crop' },
          { id: 't-b-2', name: 'Pull-Ups', sets: 3, reps: 'max', description: 'Hang from a pull-up bar. Pull yourself up until your chin clears the bar, then lower slowly.', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=400&auto=format&fit=crop' },
          { id: 't-b-3', name: 'Seated Row', sets: 3, reps: '12', description: 'Sit at a cable row machine. Pull the handle toward your lower abdomen while keeping your back straight.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' },
          { id: 't-b-4', name: 'Deadlift', sets: 4, reps: '6', description: 'Stand with feet shoulder-width apart. Hinge at hips to grip the barbell, keep back straight, and stand up.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' }
        ]
      }
    ]
  },
  3: {
    day: 'Wednesday',
    title: 'Chest + Biceps',
    isRest: false,
    workouts: [
      {
        group: 'Chest',
        exercises: [
          { id: 'w-c-1', name: 'Bench Press', sets: 4, reps: '8', description: 'Lie on a flat bench. Lower the barbell to your chest, then press it back up forcefully.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
          { id: 'w-c-2', name: 'Incline Dumbbell Press', sets: 3, reps: '10', description: 'Lie on an incline bench. Press dumbbells from your shoulders up until arms are fully extended.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' },
          { id: 'w-c-3', name: 'Chest Fly', sets: 3, reps: '12', description: 'Lie on a flat bench holding dumbbells above you. Open your arms wide with a slight bend in elbows, then bring them back.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' },
          { id: 'w-c-4', name: 'Push-Ups', sets: 3, reps: 'max', description: 'Start in a plank position. Lower your body until chest is close to the floor, then push back up.', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=400&auto=format&fit=crop' }
        ]
      },
      {
        group: 'Biceps',
        exercises: [
          { id: 'w-b-1', name: 'Barbell Curl', sets: 3, reps: '10', description: 'Stand holding a barbell with an underhand grip. Curl the weight up towards your chest, then lower.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' },
          { id: 'w-b-2', name: 'Hammer Curl', sets: 3, reps: '12', description: 'Stand holding dumbbells with palms facing your torso. Curl the weights up while maintaining this grip.', image: 'https://images.unsplash.com/photo-1532029837206-abbe267f50f2?q=80&w=400&auto=format&fit=crop' },
          { id: 'w-b-3', name: 'Concentration Curl', sets: 3, reps: '10', description: 'Sit on a bench, rest elbow on inner thigh. Curl the dumbbell towards your chest, isolating the bicep.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' },
          { id: 'w-b-4', name: 'Preacher Curl', sets: 3, reps: '10', description: 'Sit at a preacher bench. Curl the barbell or EZ bar while keeping triceps firmly against the pad.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' }
        ]
      }
    ]
  },
  4: {
    day: 'Thursday',
    title: 'Rest / Active Recovery',
    isRest: true,
    activities: [
      'Light cardio (walking/cycling)',
      'Stretching / mobility',
      'Optional yoga'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop'
  },
  5: {
    day: 'Friday',
    title: 'Legs + Core',
    isRest: false,
    workouts: [
      {
        group: 'Legs',
        exercises: [
          { id: 'f-l-1', name: 'Deadlift', sets: 3, reps: '10', description: 'Keep back straight and core tight. Pull the bar from the floor to standing position.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
          { id: 'f-l-2', name: 'Bulgarian Split Squat', sets: 3, reps: '12', description: 'Rest one foot on a bench behind you. Lower into a squat with your front leg.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' },
          { id: 'f-l-3', name: 'Leg Extension', sets: 3, reps: '12', description: 'Sit on the machine. Extend legs until fully straight, feeling the contraction in your quads.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' },
          { id: 'f-l-4', name: 'Calf Raises', sets: 3, reps: '15', description: 'Stand with toes on a raised surface. Raise your heels as high as possible, then lower slowly.', image: 'https://images.unsplash.com/photo-1532029837206-abbe267f50f2?q=80&w=400&auto=format&fit=crop' }
        ]
      },
      {
        group: 'Core',
        exercises: [
          { id: 'f-c-1', name: 'Plank', sets: 3, reps: '60s', description: 'Hold a forearm plank position. Keep your core braced and body in a straight line.', image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?q=80&w=400&auto=format&fit=crop' },
          { id: 'f-c-2', name: 'Hanging Leg Raises', sets: 3, reps: '12', description: 'Hang from a bar. Raise your legs up toward your chest while keeping core engaged.', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=400&auto=format&fit=crop' },
          { id: 'f-c-3', name: 'Russian Twists', sets: 3, reps: '20', description: 'Sit with legs slightly elevated. Twist your torso from side to side holding a weight.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' },
          { id: 'f-c-4', name: 'Bicycle Crunch', sets: 3, reps: '20', description: 'Lie on your back. Bring opposite elbow to knee while extending the other leg.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' }
        ]
      }
    ]
  },
  6: {
    day: 'Saturday',
    title: 'Full Upper Body',
    isRest: false,
    workouts: [
      {
        group: 'Upper Body',
        exercises: [
          { id: 's-u-1', name: 'Bench Press', sets: 4, reps: '8', description: 'Lie on a flat bench. Lower the barbell to your chest, then press it back up.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
          { id: 's-u-2', name: 'Pull-Ups', sets: 4, reps: 'max', description: 'Hang from a bar. Pull yourself up until chin clears the bar, focusing on back muscles.', image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&w=400&auto=format&fit=crop' },
          { id: 's-u-3', name: 'Shoulder Press', sets: 3, reps: '10', description: 'Press dumbbells overhead from shoulder height until arms are fully extended.', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&auto=format&fit=crop' },
          { id: 's-u-4', name: 'Barbell Row', sets: 3, reps: '10', description: 'Bend over holding a barbell. Pull it toward your waist, squeezing shoulder blades together.', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop' }
        ]
      }
    ]
  },
  0: {
    day: 'Sunday',
    title: 'Rest',
    isRest: true,
    activities: [
      'Complete rest',
      'Hydrate and prepare for the week'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400&auto=format&fit=crop'
  }
};
