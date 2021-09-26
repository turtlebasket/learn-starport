// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: learnstarport/btc_tx.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type BtcTx struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id      uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Txid    string `protobuf:"bytes,3,opt,name=txid,proto3" json:"txid,omitempty"`
	To      string `protobuf:"bytes,4,opt,name=to,proto3" json:"to,omitempty"`
	From    string `protobuf:"bytes,5,opt,name=from,proto3" json:"from,omitempty"`
	Amount  string `protobuf:"bytes,6,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (m *BtcTx) Reset()         { *m = BtcTx{} }
func (m *BtcTx) String() string { return proto.CompactTextString(m) }
func (*BtcTx) ProtoMessage()    {}
func (*BtcTx) Descriptor() ([]byte, []int) {
	return fileDescriptor_8dac98eb76b396fd, []int{0}
}
func (m *BtcTx) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *BtcTx) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_BtcTx.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *BtcTx) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BtcTx.Merge(m, src)
}
func (m *BtcTx) XXX_Size() int {
	return m.Size()
}
func (m *BtcTx) XXX_DiscardUnknown() {
	xxx_messageInfo_BtcTx.DiscardUnknown(m)
}

var xxx_messageInfo_BtcTx proto.InternalMessageInfo

func (m *BtcTx) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *BtcTx) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *BtcTx) GetTxid() string {
	if m != nil {
		return m.Txid
	}
	return ""
}

func (m *BtcTx) GetTo() string {
	if m != nil {
		return m.To
	}
	return ""
}

func (m *BtcTx) GetFrom() string {
	if m != nil {
		return m.From
	}
	return ""
}

func (m *BtcTx) GetAmount() string {
	if m != nil {
		return m.Amount
	}
	return ""
}

func init() {
	proto.RegisterType((*BtcTx)(nil), "turtlebasket.learnstarport.learnstarport.BtcTx")
}

func init() { proto.RegisterFile("learnstarport/btc_tx.proto", fileDescriptor_8dac98eb76b396fd) }

var fileDescriptor_8dac98eb76b396fd = []byte{
	// 242 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xb1, 0x4e, 0x84, 0x40,
	0x18, 0x84, 0x59, 0xe4, 0x30, 0x6e, 0x61, 0xb1, 0x31, 0x66, 0x73, 0xc5, 0xe6, 0x62, 0x45, 0x23,
	0x5b, 0xd8, 0x5a, 0xdd, 0x23, 0x5c, 0x8c, 0x85, 0x8d, 0x59, 0x60, 0x45, 0xe2, 0x71, 0x3f, 0x59,
	0x86, 0x04, 0x4b, 0xdf, 0xc0, 0xc7, 0xb2, 0xbc, 0xd2, 0xd2, 0xc0, 0x8b, 0x18, 0x16, 0x35, 0xd2,
	0xcd, 0x4c, 0xbe, 0x29, 0x66, 0xf8, 0x7a, 0x6f, 0x8d, 0x3b, 0xb4, 0x30, 0xae, 0x21, 0x07, 0x9d,
	0x21, 0x7f, 0x44, 0x9f, 0x36, 0x8e, 0x40, 0x22, 0x41, 0xe7, 0xb0, 0xb7, 0x99, 0x69, 0x5f, 0x2c,
	0xd2, 0x05, 0xb8, 0x74, 0xeb, 0x8b, 0x92, 0x4a, 0xf2, 0x25, 0x3d, 0xa9, 0xb9, 0x7f, 0xf5, 0xc6,
	0xf8, 0x6a, 0x8b, 0xfc, 0xae, 0x17, 0x92, 0x9f, 0xe6, 0xce, 0x1a, 0x90, 0x93, 0x6c, 0xc3, 0x92,
	0xb3, 0xdd, 0xaf, 0x15, 0xe7, 0x3c, 0xac, 0x0a, 0x19, 0x6e, 0x58, 0x12, 0xed, 0xc2, 0xaa, 0x10,
	0x82, 0x47, 0xe8, 0xab, 0x42, 0x9e, 0x78, 0xcc, 0xeb, 0x89, 0x01, 0xc9, 0xc8, 0x27, 0x21, 0x68,
	0x62, 0x9e, 0x1c, 0xd5, 0x72, 0x35, 0x33, 0x93, 0x16, 0x97, 0x3c, 0x36, 0x35, 0x75, 0x07, 0xc8,
	0xd8, 0xa7, 0x3f, 0x6e, 0x7b, 0xff, 0x31, 0x28, 0x76, 0x1c, 0x14, 0xfb, 0x1a, 0x14, 0x7b, 0x1f,
	0x55, 0x70, 0x1c, 0x55, 0xf0, 0x39, 0xaa, 0xe0, 0xe1, 0xb6, 0xac, 0xf0, 0xdc, 0x65, 0x69, 0x4e,
	0xb5, 0xfe, 0x3f, 0x54, 0xfb, 0x69, 0xd7, 0x7f, 0x97, 0xf4, 0x7a, 0x79, 0x11, 0x5e, 0x1b, 0xdb,
	0x66, 0xb1, 0x9f, 0x78, 0xf3, 0x1d, 0x00, 0x00, 0xff, 0xff, 0xde, 0x59, 0xf3, 0xf4, 0x40, 0x01,
	0x00, 0x00,
}

func (m *BtcTx) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *BtcTx) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *BtcTx) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Amount) > 0 {
		i -= len(m.Amount)
		copy(dAtA[i:], m.Amount)
		i = encodeVarintBtcTx(dAtA, i, uint64(len(m.Amount)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.From) > 0 {
		i -= len(m.From)
		copy(dAtA[i:], m.From)
		i = encodeVarintBtcTx(dAtA, i, uint64(len(m.From)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.To) > 0 {
		i -= len(m.To)
		copy(dAtA[i:], m.To)
		i = encodeVarintBtcTx(dAtA, i, uint64(len(m.To)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Txid) > 0 {
		i -= len(m.Txid)
		copy(dAtA[i:], m.Txid)
		i = encodeVarintBtcTx(dAtA, i, uint64(len(m.Txid)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintBtcTx(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintBtcTx(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintBtcTx(dAtA []byte, offset int, v uint64) int {
	offset -= sovBtcTx(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *BtcTx) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovBtcTx(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovBtcTx(uint64(m.Id))
	}
	l = len(m.Txid)
	if l > 0 {
		n += 1 + l + sovBtcTx(uint64(l))
	}
	l = len(m.To)
	if l > 0 {
		n += 1 + l + sovBtcTx(uint64(l))
	}
	l = len(m.From)
	if l > 0 {
		n += 1 + l + sovBtcTx(uint64(l))
	}
	l = len(m.Amount)
	if l > 0 {
		n += 1 + l + sovBtcTx(uint64(l))
	}
	return n
}

func sovBtcTx(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBtcTx(x uint64) (n int) {
	return sovBtcTx(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *BtcTx) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBtcTx
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: BtcTx: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: BtcTx: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBtcTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBtcTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Txid", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBtcTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBtcTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Txid = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field To", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBtcTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBtcTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.To = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field From", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBtcTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBtcTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.From = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBtcTx
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBtcTx
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Amount = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipBtcTx(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBtcTx
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipBtcTx(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBtcTx
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBtcTx
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthBtcTx
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBtcTx
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBtcTx
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBtcTx        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBtcTx          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBtcTx = fmt.Errorf("proto: unexpected end of group")
)
