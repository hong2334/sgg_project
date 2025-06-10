export const getCurrentTimePeriod = () => {
    const hour = new Date().getHours();
    if (hour < 6) return '晚上';
    if (hour < 12) return '早上';
    if (hour < 18) return '下午';
    return '晚上';
};