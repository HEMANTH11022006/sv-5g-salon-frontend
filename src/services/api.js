const API_BASE = import.meta.env.DEV
  ? 'http://localhost:8787/api'
  : 'https://sv5g-salon-api.peketihemanth8.workers.dev/api';

export const createBooking = async (data) => {
  const response = await fetch(`${API_BASE}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || 'Something went wrong.');
  }
  return result;
};

export const getBookings = async () => {
  const response = await fetch(`${API_BASE}/bookings`);
  if (!response.ok) {
    throw new Error('Failed to load bookings.');
  }
  return response.json();
};

export const updateBookingStatus = async (id, status) => {
  const response = await fetch(`${API_BASE}/bookings/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error('Failed to update status.');
  }
  return response.json();
};

export const deleteBooking = async (id) => {
  const response = await fetch(`${API_BASE}/bookings/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete booking.');
  }
  return response.json();
};
