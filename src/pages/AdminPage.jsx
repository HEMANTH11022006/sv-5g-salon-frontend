import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Search, Trash2 } from 'lucide-react';
import { getBookings, updateBookingStatus, deleteBooking } from '../services/api';

function getStatusColor(status) {
  switch (status) {
    case 'Confirmed': return 'text-blue-400';
    case 'Completed': return 'text-green-400';
    case 'Cancelled': return 'text-red-400';
    default: return 'text-yellow-400';
  }
}

export default function AdminPage() {
  const [allBookingsList, setAllBookingsList] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBookings();
      setAllBookingsList(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleUpdateStatus = async (id, status) => {
    try {
      await updateBookingStatus(id, status);
      fetchData();
    } catch {
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) return;
    try {
      await deleteBooking(id);
      fetchData();
    } catch {
      alert('Failed to delete booking');
    }
  };

  // Filtering
  let filtered = allBookingsList;
  if (filterDate) {
    filtered = filtered.filter((b) => b.date.startsWith(filterDate));
  }
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (b) =>
        b.customerName.toLowerCase().includes(term) ||
        b.mobileNumber.includes(term) ||
        b.service.toLowerCase().includes(term)
    );
  }

  // Stats
  const stats = {
    total: allBookingsList.length,
    pending: allBookingsList.filter((b) => b.status === 'Pending').length,
    confirmed: allBookingsList.filter((b) => b.status === 'Confirmed').length,
    completed: allBookingsList.filter((b) => b.status === 'Completed').length,
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      {/* Admin Nav */}
      <nav className="bg-black border-b border-zinc-900 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold playfair text-gold">SV 5G SALON ADMIN</div>
        <Link to="/" className="text-sm text-gray-400 hover:text-white">View Site</Link>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Header + Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Appointments</h1>
            <p className="text-gray-400">Manage your salon&apos;s daily schedule.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search customer..."
                className="bg-zinc-900 border border-zinc-800 rounded px-10 py-2 text-sm focus:border-gold outline-none w-64 text-white"
              />
            </div>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 rounded px-4 py-2 text-sm focus:border-gold outline-none text-white"
            />
            <button
              onClick={fetchData}
              className="bg-gold text-black px-6 py-2 rounded font-bold text-sm cursor-pointer"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="glass-card p-6 border-l-4 border-gold">
            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Total Bookings</p>
            <h3 className="text-2xl font-bold">{stats.total}</h3>
          </div>
          <div className="glass-card p-6 border-l-4 border-yellow-500">
            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Pending</p>
            <h3 className="text-2xl font-bold">{stats.pending}</h3>
          </div>
          <div className="glass-card p-6 border-l-4 border-blue-500">
            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Confirmed</p>
            <h3 className="text-2xl font-bold">{stats.confirmed}</h3>
          </div>
          <div className="glass-card p-6 border-l-4 border-green-500">
            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Completed</p>
            <h3 className="text-2xl font-bold">{stats.completed}</h3>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Customer</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Phone</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Service</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Date &amp; Time</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold">Status</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-widest text-gray-500 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-500">
                      Loading appointments...
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-500">
                      No appointments found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((booking) => (
                    <tr
                      key={booking._id}
                      className="border-b border-zinc-900 hover:bg-zinc-900/30 transition"
                    >
                      <td className="px-6 py-4">
                        <div className="font-bold text-white">{booking.customerName}</div>
                        <div className="text-[10px] text-gray-500 uppercase">Registered Client</div>
                      </td>
                      <td className="px-6 py-4 text-gray-300 font-mono text-sm">
                        {booking.mobileNumber}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {booking.service.split(', ').map((s) => (
                            <span
                              key={s}
                              className="bg-gold/10 border border-gold/20 px-2 py-0.5 rounded text-[10px] text-gold font-bold"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-white">
                          {new Date(booking.date).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className="text-xs text-gray-500">{booking.timeSlot}</div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={booking.status}
                          onChange={(e) => handleUpdateStatus(booking._id, e.target.value)}
                          className={`bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-[10px] font-bold uppercase cursor-pointer outline-none ${getStatusColor(
                            booking.status
                          )}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(booking._id)}
                          className="p-2 hover:bg-red-500/10 text-red-500 rounded transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
